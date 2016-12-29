const input = "L5, R1, L5, L1, R5, R1, R1, L4, L1, L3, R2, R4, L4, L1, L1, R2, R4, R3, L1, R4, L4, L5, L4, R4, L5, R1, R5, L2, R1, R3, L2, L4, L4, R1, L192, R5, R1, R4, L5, L4, R5, L1, L1, R48, R5, R5, L2, R4, R4, R1, R3, L1, L4, L5, R1, L4, L2, L5, R5, L2, R74, R4, L1, R188, R5, L4, L2, R5, R2, L4, R4, R3, R3, R2, R1, L3, L2, L5, L5, L2, L1, R1, R5, R4, L3, R5, L1, L3, R4, L1, L3, L2, R1, R3, R2, R5, L3, L1, L1, R5, L4, L5, R5, R2, L5, R2, L1, L5, L3, L5, L5, L1, R1, L4, L3, L1, R2, R5, L1, L3, R4, R5, L4, L1, R5, L1, R5, R5, R5, R2, R1, R2, L5, L5, L5, R4, L5, L4, L4, R5, L2, R1, R5, L1, L5, R4, L3, R4, L2, R3, R3, R3, L2, L2, L2, L1, L4, R3, L4, L2, R2, R5, L1, R2";

const split = input.split(", ");
const directions = [[0,1], [1,0], [0,-1], [-1,0]];

let location = [0,0];
let ord = 0;
let whereIveBeen = [[0,0]];
let visited = [];

split.forEach((i) => {
  if (i[0] == "L") {
    ord = (ord + 3) % 4
  } else {
    ord = (ord + 1) % 4
  }

  const distance = i.substring(1);
  const direction = directions[ord];

  for (var i = 0; i < distance; i++) {
    location = [location[0] + direction[0], location[1] + direction[1]];
    const visitedTwice = whereIveBeen.find((loc) => loc[0] === location[0] && loc[1] === location[1]);

    if (visitedTwice) {
      visited.push({
        location: visitedTwice,
        distance: Math.abs(visitedTwice[0]) + Math.abs(visitedTwice[1])
      })
    }
    whereIveBeen.push(location);
  }

});

console.log(visited[0]);