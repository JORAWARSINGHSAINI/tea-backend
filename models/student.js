const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    password: String,
    email: String,
    institution:String,
    phoneno: String,
    classes:{
        type: Array,
    }
});
module.exports = mongoose.model('student',StudentSchema);