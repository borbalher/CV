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
                        'objectivesdesc' : '<li><span class="bold">Earning experience</span> as computer engineer in a laboral environment.</li><li><span class="bold">Learn the workflow</span> of an IT enterprise.</li><li><span class="bold">Mastering my skills</span> or <span class="bold">learn some new ones.</span></li><li>At last but not least: <span class="bold">do my best!</span>',
                        'skillstitle' : 'My skills <i id="rocket" class="fa fw fa-rocket" aria-hidden="true"></i>',
                        'skillsdesc' : '<p>Through the years I\'ve been in touch with <span class="bold">many programming languages</span> but, in the present, I feel comfortable with the following:</p><ul><li><span class="bold">XAMP</span> applications.</li><li><span class="bold">MEAN</span> stack.</li><li><span class="bold">SCRUM</span> agile development.</li><li><span class="bold">Git/Gitflow</span> version control.</li><li><span class="bold">Adobe Photoshop and Illustrator</span>.</li><li><span class="bold">HTML, CSS & Javascript.</span></li></ul><p>Those are the ones that I use the most but there are other programming languages that I can use to make awesome things: <span class="bold">C, C++, C#, .NET, Java</span> and to a lesser extent <span class="bold">Prolog, Ruby and Python.</span></p> <p>I just only need a <span class="bold">little adaptation period to switch languages.</span></p>',
                        'educationtitle' : 'Education',
                        'educationdesc' : '<ul><li><span class="bold">Computer Engineering Degree:  computation and artificial intelligence</span> — <span class="italic">Universidad de La Laguna </span> [2011-2016]</li><li><span class="bold">Professional Training: Interactive Applications Development in 4th generation environments and CASE tools</span> — <span class="italic">IES Domingo P&eacute;rez Minik</span> [2009-2011]</li></ul>',
                        'cumplimentaryeducationtitle' : '<i class="fa fw fa-book"></i> Cumplimentary education',
                        'cumplimentaryeducationdesc' : '<ul><li><span class="bold">Introduction to Web Development using CAKEPHP</span>  — <span class="italic">Fundaci&oacute;n General de la Universidad de La Laguna </span> [2013] [10 hours]</li><li><span class="bold">LaunchTF: Startup\'s pre-acceleration program </span> —  <span class="italic">Fundaci&oacute;n General de la Universidad de La Laguna</span> [2015] [70 hours]</li><li><span class="bold">Google Act&iacute;vate: Developing Mobile Apps</span> -  <span class="italic">Universidad Complutense de Madrid</span> [2014] [40 hours]</li><li><span class="bold">Google Act&iacute;vate: Cloud Computing</span> - <span class="italic">Escuela de Organizaci&oacute;n Industrial</span> [2014] [40 hours]</li><li><span class="bold">Google Act&iacute;vate: Web Analytics - <span class="italic">Escuela de Organizaci&oacute;n Industrial [2014] [40 hours]</li><li><span class="bold">Google Act&iacute;vate Basic Marketing -  <span class="italic">Escuela de Organizaci&oacute;n Industrial</span> [2014] [40 hours]</li><li><span class="bold">LaunchTF: Startup\'s pre-acceleration program </span> —  <span class="italic">Fundaci&oacute;n General de la Universidad de La Laguna</span> [2015] [70 hours]</li><li><span class="bold">Orientation and Introduction to Web Design</span>  — <span class="italic"> Fundaci&oacute;n General de la Universidad de La Laguna</span> [2016] [4 hours]</li><li><span class="bold">E-commerce: an alternative for sales</span> - <span class="italic">C&aacute;mara de Comercio de Santa Cruz de Tenerife</span> [2016] [4 hours]</li></ul>'
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
