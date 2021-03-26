const express = require('express')
const app = express(); 
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
var cors = require('cors');

const connectdb = async()=>{
 await mongoose.connect('mongodb+srv://jorawarsingh12:Jorawar@123@tea.idu4v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        ,{ useUnifiedTopology: true,useNewUrlParser:true });
  console.log('connected!');
}
connectdb();
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
app.get("/",(req,res)=>{
  res.send("Working!");
})
app.use('/class', require('./routes/new_class'));
app.use('/assignment',require('./routes/new_assignment'));
app.use('/test',require('./routes/new_test'));
app.use('/student', require('./routes/new_student'));
app.use('/teacher',require('./routes/new_teacher'));
app.use('/institution',require('./routes/new_institution'));


let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Started API ${port}`)
  });