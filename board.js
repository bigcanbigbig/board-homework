var path = require('path');

var board = require('express')();
var partials = require('express-partials');
var static = require('serve-static');
var bodyParser = require('body-parser');

var page = require('./routes/page');

board.use(bodyParser.json()); 
board.use(bodyParser.urlencoded({ extended: true}));

board.use(partials());
board.set('views', path.join(__dirname, 'views'));
board.set('view engine', 'ejs');

board.use( static( path.join( __dirname, 'public' )));

board.get('/', page.index);

board.listen(3000);