const http = require('http');
const Contact = require('../models/models/Contact');

function handleContactRequest(req, res) {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    const { name, message } = JSON.parse(body);
    try {
      await Contact.create({ name, message });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: err.message }));
    }
  });
}

module.exports = handleContactRequest;
