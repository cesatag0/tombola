const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

function randomN() {
  return Math.floor(Math.random() * 90) + 1;
}

function inviaN() {
  const numero = randomN();
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(numero.toString());
    }
  });
}

server.on('connection', (client) => {
  console.log('client connesso');
});

setInterval(() => {
  inviaN();
}, 2000);

