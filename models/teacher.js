const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: String,
    institution:{
        type: String,
    },
    classes:{
        type: Array,
    }
}
);

module.exports = TeacherSchema;