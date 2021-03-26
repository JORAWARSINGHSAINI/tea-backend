const express = require('express')
const app = express(); 
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const passport = require('passport');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
var cors = require('cors');

mongoose.connect('mongodb://localhost/education',{ useUnifiedTopology: true,useNewUrlParser:true });
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.set("view engine", 'ejs')
app.use(express.static('public'))


// all routes are mentioned here

app.use(express.json({
  type: ['application/json', 'text/plain']
}))

app.use('/class', require('./routes/new_class'));
app.use('/assignment',require('./routes/new_assignment'));
app.use('/test',require('./routes/new_test'));


// error page


app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:5000`)
  });