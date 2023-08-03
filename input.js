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
      console.log("Move Up");
      connection.write("Move: up");
      break;
    case 'a':
      console.log("Move left");
      connection.write("Move: left");
      break;
    case 's':
      console.log("Move down");
      connection.write("Move: down");
      break;
    case 'd':
      console.log("Move right");
      connection.write("Move: right");
      break;
    case 'g':
      console.log("Move right");
      connection.write("Say: sss~");
      break;
    case '\u0003':
      console.log("Exit.");
      process.exit();
      break;
  }
}

module.exports = {
  setUpInput
}