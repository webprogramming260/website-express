const express = require('express');
const app = express();

// The service port defaults to 3000 or is read from the program arguments
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Server up the static content
app.use(express.static('public'));

// Provide the version of the application
app.get('/version', (_req, res) => {
  res.send({ version: '20221228.075705.1' });
});

// Return the homepage if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
