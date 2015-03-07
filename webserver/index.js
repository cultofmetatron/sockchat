var express = require('express')
var app = express();
var path = require('path')

app.set('view engine', 'jade');
app.set('views', [path.join(__dirname, '..', 'views')])

app.use('/js', express.static(path.join(__dirname, '..', 'frontend', 'build', 'js')))


app.get('/', function(req, res, next) {
  res.render('main', {
    pageTitle: 'sockchat',
    message: 'hello'
  });
});



app.listen(3000);

