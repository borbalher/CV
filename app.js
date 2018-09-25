var express = require('express');
var english_content = require('./langs/english');
var spanish_content = require('./langs/spanish');
var morgan = require('morgan');
var app = express();

app.set('views', './public/views')
app.set('view engine', 'pug');
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('slideshow', english_content);
});

app.get('/en/slideshow', function (req, res) {
  res.render('slideshow', english_content);
});

app.get('/es/slideshow', function (req, res) {
  res.render('slideshow', spanish_content);
});

app.get('/en/static', function (req, res) {
  res.render('static', english_content);
});

app.get('/es/static', function (req, res) {
  res.render('static', spanish_content);
});

app.get('/css/normalize.css', function (req, res) {
  res.sendFile(__dirname + '/node_modules/normalize.css/normalize.css');
});

app.get('/css/animate.css', function (req, res) {
  res.sendFile(__dirname + '/node_modules/animate.css/animate.min.css');
});

app.get('/css/font-awesome.css', function (req, res) {
  res.sendFile(__dirname + '/node_modules/font-awesome/css/font-awesome.min.css');
});

app.get('/css/owl-carousel.css', function (req, res) {
  res.sendFile(__dirname + '/node_modules/owl.carousel/dist/assets/owl.carousel.min.css');
});

app.get('/css/owl-carousel-theme.css', function (req, res) {
  res.sendFile(__dirname + '/node_modules/owl.carousel/dist/assets/owl.theme.default.min.css');
});

app.get('/js/wow.js', function (req, res) {
  res.sendFile(__dirname + '/node_modules/wowjs/dist/wow.min.js');
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

app.get('/js/owl-carousel.js', function (req, res) {
  res.sendFile(__dirname + '/node_modules/owl.carousel/dist/owl.carousel.min.js');
});

app.get('/js/jquery.js', function (req, res) {
  res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.min.js');
});

app.get('/fonts/fontawesome-webfont.woff2', function (req, res) {
  res.sendFile(__dirname + '/node_modules/font-awesome/fonts/fontawesome-webfont.woff2');
});

app.get('/fonts/fontawesome-webfont.woff', function (req, res) {
  res.sendFile(__dirname + '/node_modules/font-awesome/fonts/fontawesome-webfont.woff');
});

app.get('/fonts/fontawesome-webfont.ttf', function (req, res) {
  res.sendFile(__dirname + '/node_modules/font-awesome/fonts/fontawesome-webfont.ttf');
});

function getFileName(fileName, extension) {
  if (process.env.NODE_ENV == "production") {
    return fileName + '.min.' + extension;
  } else {
    return fileName + '.' + extension;
  }
}

app.get('/js/load-skrollr.js', function (req, res) {
  res.sendFile(__dirname + '/js/' + getFileName('load-skrollr', 'js'));
});

app.get('/js/load-scroll-top.js', function (req, res) {
  res.sendFile(__dirname + '/js/' + getFileName('load-scroll-top', 'js'));
});

app.get('/js/load-wow.js', function (req, res) {
  res.sendFile(__dirname + '/js/' + getFileName('load-wow', 'js'));
});

app.get('/js/load-owl-carousel.js', function (req, res) {
  res.sendFile(__dirname + '/js/' + getFileName('load-owl-carousel', 'js'));
});

app.get('/js/jquery.mousewheel.js', function (req, res) {
  res.sendFile(__dirname + '/node_modules/jquery-mousewheel/jquery.mousewheel.js');
});

app.get('/css/main.css', function (req, res) {
  res.sendFile(__dirname + '/css/' + getFileName('main', 'css'));
});

app.get('/css/skrollr.animations.css', function (req, res) {
  res.sendFile(__dirname + '/css/' + getFileName('skrollr.animations', 'css'));
});

app.get('/css/skrollr.styles.css', function (req, res) {
  res.sendFile(__dirname + '/css/' + getFileName('skrollr.styles', 'css'));
});

app.get('/css/static.css', function (req, res) {
  res.sendFile(__dirname + '/css/' + getFileName('static', 'css'));
});

app.get('/favicon.png', function (req, res) {
  res.sendFile(__dirname + '/favicon.png');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
