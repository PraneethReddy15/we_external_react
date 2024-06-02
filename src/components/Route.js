const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/about.html');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us Page');
});

app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`);});