const net = require('net');

const connect = () => {
  console.log('Connecting to server...');
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Connected!');
  }).on('data', (data) => {
    console.log(data);
  })
  return conn;
}

module.exports = {
  connect
};
