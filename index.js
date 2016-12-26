var express = require('express');
var app = express();


app.set('views', './public/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hi! I\'m Boris Ballester. Welcome to my site!',
                        'about': 'About me', 'work': 'Work', 'contact': 'Contact me',
                        'intro': 'Computer engineering + design',
                        'whoamititle' : 'Who am I?',
                        'whoamidesc' : 'I\'m <span class="bold">Boris Ballester</span>, a young guy from a little paradise called <span class="bold">Canary Islands</span> and located in <span class="bold">Spain</span>. I\'ve been surrounded by <span class="bold">technology</span> all my life and is one of my passions along with <span class="bold">digital art</span> and <span class="bold">creating</span> things. <span class="bold">For me, do anything isn\'t impossible. It\'s just a matter of time!</span>',
                        'objectivestitle' : 'My career objectives',
                        'objectivesdesc' : '<li><span class="bold">Earning experience</span> as computer engineer in a laboral environment.</li><li><span class="bold">Learn the workflow</span> of an IT enterprise.</li><li><span class="bold">Mastering my skills</span> or <span class="bold">learn some new ones.</span></li><li>And finally but not least: <span class="bold">do my best!</span>'
                      });
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


app.get('/js/skrollr.js', function (req, res) {
   res.sendFile(__dirname + '/node_modules/skrollr/dist/skrollr.min.js');
});

app.get('/js/wow.js', function (req, res) {
   res.sendFile(__dirname + '/node_modules/wowjs/dist/wow.min.js');
});

app.get('/js/chart.js', function (req, res) {
   res.sendFile(__dirname + '/node_modules/chart.js/dist/chart.min.js');
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

app.get('/imgs/signature.png', function (req, res) {
   res.sendFile(__dirname + '/public/imgs/signature.png');
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



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
