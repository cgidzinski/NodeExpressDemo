// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 8082;
var mongoose = require('mongoose');
var morgan = require('morgan');
var config = require('./config/database.js');
// configuration ===============================================================
if (!mongoose.connect(config.url)) {
    res.send("DB Fail");
} // connect to our database
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(__dirname + '/public'));
// routes ======================================================================
require('./routes/root.js')(app);
require('./routes/404.js')(app);
// launch ======================================================================
app.use(morgan('dev'));
mongoose.set('debug', true);
app.listen(port);
console.log('The magic happens on port ' + port);

