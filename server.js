const express = require('express');
const path = require('path');
//Init App
const app = express();

//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello!!'
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});