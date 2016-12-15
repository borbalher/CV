var express = require('express');
var app = express();


app.set('views', './public/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});


app.get('/css/normalize.css', function (req, res) {
   res.sendFile(__dirname + '/node_modules/normalize.css/normalize.css');
});

app.get('/js/skrollr.js', function (req, res) {
   res.sendFile(__dirname + '/node_modules/skrollr/dist/skrollr.min.js');
});

app.get('/js/skrollr-ie.js', function (req, res) {
   res.sendFile(__dirname + '/node_modules/skrollr-ie/dist/skrollr.ie.min.js');
});

app.get('/js/skrollr-menu.js', function (req, res) {
   res.sendFile(__dirname + '/node_modules/skrollr-menu/dist/skrollr.menu.min.js');
});

app.get('/js/skrollr-stylesheets.js', function (req, res) {
   res.sendFile(__dirname + '/node_modules/skrollr-stylesheets/dist/skrollr.stylesheets.min.js');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
