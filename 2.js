var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line) {

  //manipulate lines
  console.log(line)

}).on('close', function() {

 // when done

});