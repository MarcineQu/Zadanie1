const http = require('http');
const requestIp = require('request-ip');
const moment = require('moment-timezone');

const PORT = 3000;
const authorName = 'Marcin Garbacz';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const clientIp = requestIp.getClientIp(req).slice(7); // pobierz adres IP klienta
    const clientTime = moment.tz(Date.now(), 'Europe/Warsaw'); // oblicz czas w strefie czasowej klienta
    const clientTimeFormatted = clientTime.format('YYYY-MM-DD HH:mm:ss z'); // sformatuj czas w odpowiedni sposób
    const responseHtml = `
      <html>
        <head>
          <title>Informacje o kliencie</title>
        </head>
        <body>
          <h1>Adres IP klienta: ${clientIp}</h1>
          <h2>Czas w strefie czasowej klienta: ${clientTimeFormatted}</h2>
        </body>
      </html>
    `;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(responseHtml);
    res.end();
  } else if (req.url === '/healthcheck') { // obsługa punktu końcowego /healthcheck
    res.writeHead(200);
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  const now = new Date();
  console.log(`Serwer uruchomiony: ${now.toLocaleString()} przez ${authorName} na porcie ${PORT}`);
});
