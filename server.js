const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'Jeffsrandomsecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const flash = require('express-flash');
app.use(flash());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors');
mongoose.Promise = global.Promise;


app.use(express.static( __dirname + '/public/dist/public'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.all('*', (req, res, next)=>{
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(9999, ()=>{
    console.log('Local host listening on port: 9999.')
});