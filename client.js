const net = require('net');
const {IP, PORT, NAME} = require('./constants')

const connect = () => {
  console.log('Connecting to server...');
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Connected!');
    conn.write(NAME);
  }).on('data', (data) => {
    console.log(data);
  })
  return conn;
}

module.exports = {
  connect
};
