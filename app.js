var express = require('express');
var app = express();

app.set('views', './public/views')
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

var spanish_content = {
  'about': 'Sobre',
  'work': 'Trabajos',
  'intro': 'Ingeniería Informática + diseño',
  'english' : 'Inglés',
  'selfassessment' : 'Autoevaluación de las habilidades lingüísticas',
  'understanding' : 'Comprensión',
  'speaking' : 'Habla',
  'writing' : 'Escritura',
  'listening' : 'Escucha',
  'reading' : 'Lectura',
  'spokenprod' : 'Producción hablada',
  'spokenint' : 'Interacción hablada',
  'b2' : 'B2 usuario independiente.',
  'b1' : 'B1 usuario independiente.',
  'langtitle' : 'Idiomas que hablo',
  'mothertonguetitle' : 'Lengua nativa',
  'mothertongues' : 'Español',
  'otherlangtitle' : 'Otros idiomas',
  'otherlangs' : 'Inglés',
  'myworks' : 'No te preocupes, te enseñaré algunos de mis trabajos',
  'slideshow' : '<a href="/es/static" title="Static version">¿Usas un navegador viejo? Click aquí para una versión estática.</a>',
  'education' : {
      'title' : 'Mi formación',
      'course_name': ["Grado en Ingeniería Informática:  itinerario en Computación e Inteligencia Artificial","Formación Profesional: Desarrollo de Aplicaciones Interactivas en entornos de 4ª generación y herramientas CASE"],
      'course_institution': ["Universidad de La Laguna","IES Domingo Pérez Minik"],
      'course_begin':  [2011,2009],
      'course_end': [2016,2011]
    },
    'complementaryeducation' : {
        'title' : 'Mi formación complementaria',
        'texts' : ["La mayor parte de mi formación complementaria está fuertemente basada en", "Aparte de eso, también tengo conocimiento de otras áreas como" ],
        'boldtexts' : ["ordenadores y tecnología","e-commerce, marketing y emprendeduría"],
        'course_name': [
          "Introducción al Desarrollo Web usando CAKEPHP",
          "Google Actívate: Desarrollo de Apps Móviles",
          "Google Actívate: Computación en la Nube",
          "Google Actívate: Introducción al Diseño Web",
          "Google Actívate: Analítica Web",
          "Google Actívate: Marketing Básico",
          "LaunchTF: Programa de pre-aceleraci&oacute;n para Startups",
          "E-commerce: una alternativa para ventas"
        ],
        'course_institution': [
          "Fundación General de la Universidad de La Laguna",
          "Universidad Complutense de Madrid",
          "Escuela de Organización Industrial",
          "Instituto de Economía Internacional",
          "Escuela de Organización Industrial",
          "Interactive Advertising Bureau",
          "Fundación General de la Universidad de La Laguna",
          "Cámara de Comercio de Santa Cruz de Tenerife"
        ],
        'course_hours': [10,40,40,40,40,40,70,4],
        'course_year': [2013,2014,2014,2014,2014,2014,2015,2016]
      },
      'skills' : {
        'title': 'Mis habilidades',
        'texts': ["Con el paso de los años he estado en contacto con",
                       "pero, en la actualidad, me encuentro cómodo con los siguientes:",
                       "Esos son los lenguajes que más suelo usar pero existen otros con los que puedo hacer cosas impresionantes:",
                       "y en menor medida",
                       "Solamente necesito un"
        ],
        'boldtexts': ["bastantes lenguajes de programación",
                     "C, C++, C#, .NET, Java",
                     "Prolog, Ruby y Python.",
                     "pequeño periodo de adaptación para cambiar de un lenguaje a otro."
        ],
        'skills': ["Aplicaciones XAMP","Aplicaciones MEAN","Desarrollo ágil SCRUM","Git/Gitflow","Adobe Photoshop & Illustrator","HTML,CSS & Javascript"]
      },
      'objectives' : {
        'title': 'Mis objetivos profesionales',
        'texts': ["como ingeniero informático en un entorno laboral.","de una empresa IT.","Y por último pero no menos importante:"],
        'boldtexts': ["Obtener experiencia","Aprender el flujo de trabajo","Mejorar mis habilidades o aprender algunas nuevas","hacerlo lo mejor que pueda!"]
      },
      'whoami' : {
        'title': '¿Quién soy?',
        'texts': ["Soy ",
                  ", un chico joven de un pequeño paraíso conocido como las",
                  " y ubicado en",
                  " He estado rodeado de",
                  " toda mi vida y es una de mis pasiones junto con al",
                  " y "
        ],
        'boldtexts': ["Boris Ballester",
                      "Islas Canarias",
                      "España.",
                      "tecnología",
                      "arte digital",
                      "crear cosas.",
                      " Para mí, hacer casi cualquier cosa no es imposible. ¡Es solo cuestión de tiempo!"
        ]
      },
      'workexperience' : {
        'title': 'Experiencia laboral',
        'texts' : ['No tengo','como informático a tiempo completo y...',' Estoy muy emocionado y con ganas de hacer cosas grandes. Sin embargo, he estado','como freelancer','Estos son algunos de los servicios que presto', '404', 'Experiencia laboral "real" no encontrada.'],
        'boldtexts' : ['ninguna experiencia laboral en un entorno de trabajo real','¡Estoy deseando empezar!','ofreciendo mis servicios','desde 2010', 'Diseño de logos y web, soluciones e-commerce, configuración de redes y servidores,  formateo y reparación de ordenadores, recuperación de datos, eliminación de virus/malware, clases particulares...']
      },
      'logodesign' : {
        'title' : 'Diseño y digitalización de logos',
        'texts' : ['Creo que esto un poco','a excepción de los iconos. Gracias a', 'por los iconos CSS', "Debajo puedes ver algunos"],
        'boldtexts' : ['auto-explicativo. Todas las imágenes y vectores de está página están hechas por mi','¡Son awesome!',"ejemplos de logos que he hecho en el pasado"],
        'links' : ['<a href="http://fontawesome.io/icons/" title="FontAwesome" target="_blank"> FontAwesome</a>']
      },
      'bogui' : {
        'title' : 'Bogui JS (2015)',
        'texts' : ['Esto fue un pequeño experimento que hice con mi amigo', 'Es un simple editor online para imágenes en blanco y negro hecho en su totalidad con','Puedes echar un vistazo al proyecto'],
        'boldtexts' : ['JQuery y JQuery UI.'],
        'links' : ['<a href="https://es.linkedin.com/in/guillermo-rodríguez-70aa66b5" title="Guillermo Rivero\'s Linked Link" target="_blank">Guillermo Rivero</a>.','<a href="/bogui/html/index.html" title="Bogui JS" target="_blank">aquí</a>']
      },
      'scss' : {
        'title' : 'Simple CSS DSL (2014)',
        'texts' : ['Es un','Es similar a SASS, LESS y todos esos pre-procesadores CSS que existen a día de hoy. Fue un proyecto realizado mientras aún estaba en la Universidad junto a mi amigo','Puedes obtener más información y probar el proyecto'],
        'boldtexts' : ['Lengüaje de Dominio Específico (DSL) para escribir CSS, hecho 100% en Javascript con JISON.'],
        'links' : ['<a href="https://es.linkedin.com/in/guillermo-rodríguez-70aa66b5" title="Guillermo Rivero\'s Linked Link" target="_blank">Guillermo Rivero</a>.','<a href="/scss/index.htm" title="Simple CSS" target="_blank">aquí</a>. Desafortunadamente esta en inglés ¡Lo siento!']
      },
      'ttt' : {
        'title' : 'Tenerife Trending Topic (2014-2015)',
        'texts' : ['Web E-commerce realizada con',' Yo hice toda la parte tecnológica:','Finalmente en 2016','Aún así, puedes visitar su sitio web en este'],
        'boldtexts' : ['Prestashop.','un logo básico gratuito, una plantilla bootstrap personalizada, la configuración del servidor y la instalación de Prestashop junto con algunas modificaciones a la plataforma y los módulos.', 'hice la migración a WooCommerce pero no tuve nada que ver con el nuevo diseño ni experiencia de usuario'],
        'links' : ['<a href="https://tenerifetrendingtopic.com/" title="Tenerife Trending Topic" target="_blank">enlace</a>.']
      },
      'recblock' : {
        'title' : 'Recblock (2016)',
        'texts' : ['Esto fue', 'Es un', 'que sirve como un', 'Tanto el código como el plug-in se encuentran disponibles en este', 'Para una información más detallada sobre proyecto puedes leer al completo la'],
        'boldtexts' : ['mi proyecto final de carrera.','plug-in PHP para Moodle', 'bloque recomendador de actividades basado en el estilo de aprendizaje y tipo de jugador del usuario.'],
        'links' : ['<a href="https://github.com/borbalher/moodle-block_recblock" title="Recblock Plug-in de Moodle" target="_blank">repositorio de GitHub</a>.', '<a href="http://riull.ull.es/xmlui/handle/915/3080" title="Memoria TFG Recblock" target="_blank">Memoria del Trabajo de Fin de Grado</a>.']
      },
      'ateca' : {
        'title' : 'ATECA (2009-actualidad)',
        'texts' : ['Son ', 'en las ', 'en términos de', 'He hecho', 'también otros trabajos como:', 'Puedes echarle un vistazo a la web mediante este '],
        'boldtexts' : ['uno de los referentes','Islas Canarias', 'servicios industriales.', 'bastantes trabajos con ellos como técnico de ordenadores,', 'Digitalización del logo y creación de su primera página web corporativa (2010)', 'Plantilla personalizada para Google Sheets y presentación de sus servicios en inglés','Nueva página web corporativa en HTML5, CSS3 y con diseño responsivo (2016).' ],
        'links' : ['<a href="http://ateca-sl.com" title="ATECA" target="_blank">enlace</a>.']
      },
      'chicharro' : {
        'title' : 'Chicharro Tattoo Gallery (2017)',
        'texts' : ['Plataforma e-commerce en la que estoy trabajando para Chicharro Tattoo Gallery, el estudio de tatuaje de','Está hecho con', 'y una', 'De momento no está terminado pero puedes visitar su página'],
        'boldtexts' : ['Wordpress+Woocommerce','plantilla personalizada' ],
        'links' : ['<a href="http://www.zez608.com/" title="Web de Diego Mena" target="_blank">Diego Mena</a>','<a href="http://www.chicharrotattoogallery.com/" title="Chicharro Tattoo Gallery" target="_blank">aquí</a>.']
      },
      'wantmore' : {
        'title' : '¿Quieres más?',
        'texts' : ['Si la respuesta es: ','Puedes visitar mis repositorios de Github para ver mas código y otros proyectos:'],
        'boldtexts' : ['¡SÍ!'],
        'links' : ['<a href="https://github.com/alu0100698411" title="Mi repositorio de estudiante" target="_blank">Mi repositorio de estudiante</a>', '<a href="https://github.com/borbalher" title="Mi repositorio personal" target="_blank">Mi repositorio personal</a>']
      },
      'download' :{
        'title' : 'Descarga mi CV',
        'links' : ['<a href="/pdf/es_cv.pdf" title="Mi CV" target="_blank">Formato resumido, una página</a>', '<a href="/pdf/es_cv_europass.pdf" title="Mi CV Europass" target="_blank">Formato Europass, más completo</a>']
      },
      'contact' : {
       'title' : 'Contacto',
       'links' : ['<a href="mailto:contact@borisballester.com?Subject=Hello%20again" title="Mi e-mail">contact@borisballester.com</a>']
     }
};

var english_content = {
  'about': 'About me',
  'work': 'Works',
  'intro': 'Computer engineering + design',
  'english' : 'English',
  'selfassessment' : 'Self-assessment of language skills',
  'understanding' : 'Understanding',
  'speaking' : 'Speaking',
  'writing' : 'Writing',
  'listening' : 'Listening',
  'reading' : 'Reading',
  'spokenprod' : 'Spoken production',
  'spokenint' : 'Spoken interaction',
  'b2' : 'B2 Independent User.',
  'b1' : 'B1 Independent User.',
  'langtitle' : 'Languages that I spoke',
  'mothertonguetitle' : 'Mother tongue',
  'mothertongues' : 'Spanish',
  'otherlangtitle' : 'Other languages',
  'otherlangs' : 'English',
  'myworks' : 'Don\'t worry, I\'ll show you some of my works',
  'slideshow' : '<a href="/en/static" title="Static version">Old browser? Click here for a static version.</a>',
  'education' : {
      'title' : 'My education',
      'course_name': ["Computer Engineering Degree:  Computation and Artificial intelligence","Professional Training: Interactive Applications Development in 4th generation environments and CASE tools"],
      'course_institution': ["Universidad de La Laguna","IES Domingo Pérez Minik"],
      'course_begin':  [2011,2009],
      'course_end': [2016,2011]
    },
    'complementaryeducation' : {
        'title' : 'My complementary education',
        'texts' : ["Most of my complementary education is heavily based on ", " Besides that, I have also knowledge in other areas like " ],
        'boldtexts' : ["computers and technology","e-commerce, marketing and business"],
        'course_name': [
          "Introduction to Web Development using CAKEPHP",
          "Google Actívate: Developing Mobile Apps",
          "Google Actívate: Cloud Computing",
          "Google Actívate: Introduction to Web Design",
          "Google Actívate: Web Analytics",
          "Google Actívate;vate: Basic Marketing",
          "LaunchTF: Startup's pre-acceleration program",
          "E-commerce: an alternative for sales"
        ],
        'course_institution': [
          "Fundación General de la Universidad de La Laguna",
          "Universidad Complutense de Madrid",
          "Escuela de Organización Industrial",
          "Instituto de Economía Internacional",
          "Escuela de Organización Industrial",
          "Interactive Advertising Bureau",
          "Fundación General de la Universidad de La Laguna",
          "Cámara de Comercio de Santa Cruz de Tenerife"
        ],
        'course_hours': [10,40,40,40,40,40,70,4],
        'course_year': [2013,2014,2014,2014,2014,2014,2015,2016]
      },
      'skills' : {
        'title': 'My skills',
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
      },
      'objectives' : {
        'title': 'My career objectives',
        'texts': ["as computer engineer in a laboral environment.","of an IT enterprise.","At last but not least:"],
        'boldtexts': ["Earning experience","Learn the workflow","Mastering my skills or learn some new ones","do my best!"]
      },
      'whoami' : {
        'title': 'Who am I?',
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
      },
      'workexperience' : {
        'title': 'Work experience',
        'texts' : ['I haven\'t got','with a full-time job as programmer and','I’m very excited and looking forward to make big things. Nevertheless, I’ve been','as freelancer','These are some of the services I give', '404', '"Real" work experience not found.'],
        'boldtexts' : ['any work experience in a real laboral environment','I really want to start!','offering my services','since 2010', 'Logo and web design, e-commerce solutions, server and network configuration,  PC formatting and repairing, data recovery, virus/malware removal, private tutoring…']
      },
      'logodesign' : {
        'title' : 'Logo design and digitazion',
        'texts' : ['I guess this is a bit','except the icons. Thanks to', 'for the CSS icons,', "Below you can watch some"],
        'boldtexts' : ['self-explanatory. I made all the graphic stuff in this website','they\'re awesome!',"logo examples I\'ve made in the past"],
        'links' : ['<a href="http://fontawesome.io/icons/" title="FontAwesome" target="_blank"> FontAwesome</a>']
      },
      'bogui' : {
        'title' : 'Bogui JS (2015)',
        'texts' : ['This one was a little experiment I made with my friend', 'It\'s a simple online image editor  for black and white images using','You can check the project'],
        'boldtexts' : ['JQuery and JQuery UI.'],
        'links' : ['<a href="https://en.linkedin.com/in/guillermo-rodríguez-70aa66b5" title="Guillermo Rivero\'s Linked Link" target="_blank">Guillermo Rivero</a>.','<a href="/bogui/html/index.html" title="Bogui JS" target="_blank">here</a> but it\'s in spanish. Sorry!']
      },
      'scss' : {
        'title' : 'Simple CSS DSL (2014)',
        'texts' : ['It\'s a','It\'s similar to SASS and LESS and all that kind of CSS pre-processors that exist nowadays. It was made while I was at the university with my friend','You can check the project and get more info'],
        'boldtexts' : ['Domain Specific Language (DSL) for writing CSS, 100% done in Javascript with JISON.'],
        'links' : ['<a href="https://en.linkedin.com/in/guillermo-rodríguez-70aa66b5" title="Guillermo Rivero\'s Linked Link" target="_blank">Guillermo Rivero</a>.','<a href="/scss/index" title="Simple CSS" target="_blank">here</a>.']
      },
      'ttt' : {
        'title' : 'Tenerife Trending Topic (2014-2015)',
        'texts' : ['E-commerce website using',' I made all the geeky stuff: ','Finally in 2016','Even so, you can check their website '],
        'boldtexts' : ['Prestashop.','free basic logo, custom bootstrap template, web server configuration and Prestashop installation along some Prestashop modules modifications.', 'I did the migration to WooCommerce but I got nothing to do with the new design'],
        'links' : ['<a href="https://tenerifetrendingtopic.com/" title="Tenerife Trending Topic" target="_blank">here</a>.']
      },
      'recblock' : {
        'title' : 'Recblock (2016)',
        'texts' : ['This one was', 'It\'s a', 'that serves as a', ' The plug-in and code is available in this', 'For more detailed info about the project you can check its '],
        'boldtexts' : ['my final career project.','Moodle PHP plug-in', 'recommendation block based on user\'s playing type and learning style.'],
        'links' : ['<a href="https://github.com/borbalher/moodle-block_recblock" title="Recblock Moodle Plug-in" target="_blank">GitHub repository</a>.', '<a href="http://riull.ull.es/xmlui/handle/915/3080" title="Recblock Thesis" target="_blank">thesis</a>.']
      },
      'ateca' : {
        'title' : 'ATECA (2009-current)',
        'texts' : ['They are ', 'in the', 'in terms of', 'I have made', 'other ones include:', 'You can give it a look'],
        'boldtexts' : ['one of the referents','Canary Islands', 'industrial services.', 'many works with them as computer technician,', 'Logo digitazion and creation of their first corporate webpage (2010)', 'Custom Google Sheets template and english showcase presentation','New corporate website using responsive design and HTML5 (2016).' ],
        'links' : ['<a href="http://ateca-sl.com" title="ATECA" target="_blank">here</a>.']
      },
      'chicharro' : {
        'title' : 'Chicharro Tattoo Gallery (2017)',
        'texts' : ['E-commerce website I\'m making for Chicharro Tattoo Gallery,','tattoo studio. It uses', 'with a', ' I\'m still working in this but it will be posted as soon as I finish. You can visit theri site'],
        'boldtexts' : ['Wordpress+Woocommerce','custom template' ],
        'links' : ['<a href="http://www.zez608.com/" title="Diego Mena\'s Personal Website" target="_blank">Diego Mena\'s</a>','<a href="http://www.chicharrotattoogallery.com/" title="Chicharro Tattoo Gallery" target="_blank">here</a>.']
      },
      'wantmore' : {
        'title' : 'Do you want more?',
        'texts' : ['If the answer is: ','you can check out my github repositories for more code:'],
        'boldtexts' : ['YES!'],
        'links' : ['<a href="https://github.com/alu0100698411" title="My student repository" target="_blank">My student repository</a>', '<a href="https://github.com/borbalher" title="My personal repository" target="_blank">My personal repository</a>']
      },
      'download' :{
        'title' : 'Download my CV',
        'links' : ['<a href="/pdf/en_cv.pdf" title="My CV" target="_blank">Short format, one page only</a>', '<a href="/pdf/en_cv_europass.pdf" title="My Europass CV" target="_blank">Europass format</a>']
      },
      'contact' : {
       'title' : 'Contact',
       'links' : ['<a href="mailto:contact@borisballester.com?Subject=Hello%20again" title="My e-mail">contact@borisballester.com</a>']
     }
};

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

function getFileName(fileName, extension){
  if (process.env.NODE_ENV == "production") {
    return fileName + '.min.'+ extension;
  } else {
    return fileName + '.'+ extension;
  }
}

app.get('/js/load-skrollr.js', function (req, res) {
  res.sendFile(__dirname + '/js/'+getFileName('load-skrollr','js'));
});

app.get('/js/load-wow.js', function (req, res) {
  res.sendFile(__dirname + '/js/'+getFileName('load-wow','js'));
});

app.get('/js/load-owl-carousel.js', function (req, res) {
  res.sendFile(__dirname + '/js/'+getFileName('load-owl-carousel','js'));
});

app.get('/js/jquery.mousewheel.js', function (req, res) {
  res.sendFile(__dirname + '/node_modules/jquery-mousewheel/jquery.mousewheel.js');
});

app.get('/css/main.css', function (req, res) {
  res.sendFile(__dirname + '/css/'+getFileName('main','css'));
});

app.get('/css/skrollr.animations.css', function (req, res) {
  res.sendFile(__dirname + '/css/'+getFileName('skrollr.animations','css'));
});


app.get('/css/skrollr.css', function (req, res) {
  res.sendFile(__dirname + '/css/'+getFileName('skrollr','css'));
});


app.get('/css/static.css', function (req, res) {
  res.sendFile(__dirname + '/css/'+getFileName('static','css'));
});

app.get('/favicon.png', function (req, res) {
  res.sendFile(__dirname + '/favicon.png');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
