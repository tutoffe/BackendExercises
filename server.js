
var express= require('express');
var app = express();


//const morgan = require('morgan');

var bodyParser = require('body-parser');
var cors = require('cors');

var corsOptions = {
    origin: true,
    credentials: true
};



//Middlewares
//app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(cors(corsOptions));
app.use('/public', express.static(__dirname + '/public'));

var routes = require('./routes/routes');
routes.assignRoutes(app);

app.listen(3000);