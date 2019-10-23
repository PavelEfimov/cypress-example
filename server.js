const { join } = require('path');
const express = require('express');

const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => console.log('port 3000'));
