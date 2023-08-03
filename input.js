const {UP, LEFT, DOWN, RIGHT, MESSAGE, EXIT} = require('./constants')
let connection;
const setUpInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  connection = conn;
  return stdin;
}
const handleUserInput = (data) => {
  switch (data) {
    case 'w':
      console.log(UP);
      connection.write(UP);
      break;
    case 'a':
      console.log(LEFT);
      connection.write(LEFT);
      break;
    case 's':
      console.log(DOWN);
      connection.write(DOWN);
      break;
    case 'd':
      console.log(RIGHT);
      connection.write(RIGHT);
      break;
    case 'g':
      console.log(MESSAGE);
      connection.write(MESSAGE);
      break;
    case '\u0003':
      console.log(EXIT);
      process.exit();
      break;
  }
}

module.exports = {
  setUpInput
}