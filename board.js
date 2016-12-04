var path = require('path');

var app = require('express')();
var partials = require('express-partials');
var static = require('serve-static');
var bodyParser = require('body-parser');

var page = require('./routes/page');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));

app.use(partials());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

app.use( static( path.join( __dirname, 'public' )));

app.get('/', page.index);

var server = app.listen(app.get('port'), function() {  
  console.log('Listening on port 3000');  
});