const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    classes: {
        type: Array,
    },
    institution:{
        type:String,
    },
});

module.exports = StudentSchema;