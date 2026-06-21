const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/contacts', (req, res) => {
  res.render('contacts');
})

app.listen(3000, () => {
  console.log('Сервер запущен!');
})

