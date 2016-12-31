var express = require('express');
var app = express();


app.set('views', './public/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {


  var education = {
    "course_name": ["Computer Engineering Degree:  computation and artificial intelligence","Professional Training: Interactive Applications Development in 4th generation environments and CASE tools"],
    "course_institution": ["Universidad de La Laguna","IES Domingo P&eacute;rez Minik"],
    "course_begin":  [2011,2009],
    "course_end": [2016,2011]
  };

  var cumplimentary_education = {
    'course_name': [
      "Introduction to Web Development using CAKEPHP",
      "Google Act&iacute;vate: Developing Mobile Apps",
      "Google Act&iacute;vate: Cloud Computing",
      "Google Act&iacute;vate: Web Analytics",
      "Google Act&iacute;vate Basic Marketing",
      "LaunchTF: Startup's pre-acceleration program",
      "Orientation and Introduction to Web Design Jobs",
      "E-commerce: an alternative for sales"
    ],
    'course_institution': [
      "Fundaci&oacute;n General de la Universidad de La Laguna",
      "Universidad Complutense de Madrid",
      "Escuela de Organizaci&oacute;n Industrial",
      "Escuela de Organizaci&oacute;n Industrial",
      "Instituto de Econom&iacute;a Internacional",
      "Interactive Advertising Bureau",
      "Fundaci&oacute;n General de la Universidad de La Laguna",
      "C&aacute;mara de Comercio de Santa Cruz de Tenerife"
    ],
    'course_hours': [10,40,40,40,40,70,4,4],
    'course_year': [2013,2014,2014,2014,2014,2014,2016,2016]
  };

var skills ={
  'texts': ["Through the years I\'ve been in touch with",
                 "but, in the present, I feel comfortable with the following:",
                 "Those are the ones that I use the most but there are other programming languages that I can use to make awesome things:",
                 "and to a lesser extent",
                 "I just only need a"
  ],
  'boldtexts': ["many programming languages",
               "C, C++, C#, .NET, Java",
               "Prolog, Ruby and Python.",
               "little adaptation period to switch languages."
  ],
  'skills': ["XAMP apps","MEAN stack","SCRUM agile dev","Git/Gitflow","Adobe Photoshop & Illustrator","HTML,CSS & Javascript"]
};

var objectives ={
  'texts': ["as computer engineer in a laboral environment.","of an IT enterprise.","At last but not least:"],
  'boldtexts': ["Earning experience","Learn the workflow","Mastering my skills or learn some new ones","do my best!"]
};

var whoami ={
  'texts': ["I'm ",
            ", a young guy from a little paradise called ",
            " and located in ",
            ". I've been surrounded by ",
            " all my life and is one of my passions along with ",
            " and "
  ],
  'boldtexts': ["Boris Ballester",
                "Canary Islands",
                "Spain",
                "technology",
                "digital art",
                "creating things.",
                " For me, doing almost anything is not impossible. It's just a matter of time!"
  ]
};

res.render('index', {   'title': 'Hi! I\'m Boris Ballester. Welcome to my site!',
                        'about': 'About me', 'work': 'Work', 'contact': 'Contact me',
                        'intro': 'Computer engineering + design',
                        'whoamititle' : 'Who am I?',
                        'whoami' : whoami,
                        'objectivestitle' : 'My career objectives',
                        'objectives' : objectives,
                        'skillstitle' : 'My skills',
                        'skills' : skills,
                        'educationtitle' : 'Education',
                        'education' : education,
                        'cumplimentaryeducationtitle' : ' Cumplimentary education',
                        'cumplimentaryeducation' : cumplimentary_education
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
