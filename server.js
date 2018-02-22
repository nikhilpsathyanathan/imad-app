var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={  
    'article-one' : {
        title: 'article one',
        heading: 'article one',
        date: 'sep-5-2018',
        content:`<p>
                    this is thw content for mt first article   this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article
                </p>
                <p>
                    this is thw content for mt first article   this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article
                </p>
                <p>
                    this is thw content for mt first article   this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article
                </p>`
    },
    'article-two' : {
         title: 'article one',
        heading: 'article one',
        date: 'sep-10-2018',
        content:`<p>
                    this is thw content for mt first article   this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article
                </p>
                <p>
                    this is thw content for mt first article   this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article this is thw content for mt first article
                </p>`
    }
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = `<html>
    
    <head>
        
        <title>
              ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        
        <h3>
               ${heading}   
        </h3>
        <div>
             ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //srticleNmse=article-one
    //srticles[articleName]={} content object for article
    var articleName= req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});    

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
