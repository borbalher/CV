var express = require('express');
var app = express();


app.set('views', './public/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {


  var education = {
    "course_name": ["Computer Engineering Degree:  Computation and Artificial intelligence","Professional Training: Interactive Applications Development in 4th generation environments and CASE tools"],
    "course_institution": ["Universidad de La Laguna","IES Domingo P&eacute;rez Minik"],
    "course_begin":  [2011,2009],
    "course_end": [2016,2011]
  };


  var complementary_education = {
    'texts' : ["Most of my complementary education is heavily based in ", " Besides that, I have also knowledge in other areas like " ],
    'boldtexts' : ["computers and technology","e-commerce, marketing and business"],
    'course_name': [
      "Introduction to Web Development using CAKEPHP",
      "Google Act&iacute;vate: Developing Mobile Apps",
      "Google Act&iacute;vate: Cloud Computing",
      "Google Act&iacute;vate: Introduction to Web Design",
      "Google Act&iacute;vate: Web Analytics",
      "Google Act&iacute;vate: Basic Marketing",
      "LaunchTF: Startup's pre-acceleration program",
      "E-commerce: an alternative for sales"
    ],
    'course_institution': [
      "Fundaci&oacute;n General de la Universidad de La Laguna",
      "Universidad Complutense de Madrid",
      "Escuela de Organizaci&oacute;n Industrial",
      "Instituto de Econom&iacute;a Internacional",
      "Escuela de Organizaci&oacute;n Industrial",
      "Interactive Advertising Bureau",
      "Fundaci&oacute;n General de la Universidad de La Laguna",
      "C&aacute;mara de Comercio de Santa Cruz de Tenerife"
    ],
    'course_hours': [10,40,40,40,40,40,70,4],
    'course_year': [2013,2014,2014,2014,2014,2014,2015,2016]
  };

var skills ={
  'texts': ["Through the years I\'ve been in touch with",
                 "but, in the present, I feel comfortable with the following:",
                 "Those were the ones that I use the most but there are other programming languages that I can use to make awesome things:",
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
            " I've been surrounded by ",
            " all my life and is one of my passions along with ",
            " and "
  ],
  'boldtexts': ["Boris Ballester",
                "Canary Islands",
                "Spain.",
                "technology",
                "digital art",
                "creating things.",
                " For me, doing almost anything is not impossible. It's just a matter of time!"
  ]
};

var workexperience = {
  'texts' : ['I haven\'t got','with a full-time job as programmer and','I’m very excited and looking forward to make big things. Nevertheless, I’ve been','as freelancer','These are some of the services I give', 'And now, I\'ll show you some of', '404', '"Real" work experience not found.'],
  'boldtexts' : ['any work experience in a real laboral environment','I really want to start!','offering my services','since 2010', 'Logo and web design, e-commerce solutions, server and network configuration,  PC formatting and repairing, data recovery, virus/malware removal, private tutoring…', 'my latests projects']
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
                        'complementaryeducationtitle' : ' Complementary education',
                        'complementaryeducation' : complementary_education,
                        'english' : 'English',
                        'selfassessment' : 'Self-assessment of language skills',
                        'understanding' : 'Understanding',
                        'speaking' : 'Speaking',
                        'writing' : 'Writing',
                        'listening' : 'Listening',
                        'reading' : 'Reading',
                        'spokenprod' : 'Spoken production',
                        'spokenint' : 'Spoken interaction',
                        'writing' : 'Writing',
                        'linguistic' : 'Linguistic and intercultural experience',
                        'b2' : 'B2 Independent User.',
                        'b1' : 'B1 Independent User.',
                        'langtitle' : 'Languages that I spoke',
                        'mothertonguetitle' : 'Mother tongue',
                        'mothertongues' : 'Spanish',
                        'otherlangtitle' : 'Other languages',
                        'otherlangs' : 'English',
                        'workexperiencetitle' : 'Work experience',
                        'workexperience' : workexperience

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
