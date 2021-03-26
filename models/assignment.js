const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    name: {
        type: String,
    },
    marks: {
        type: Array,
    },
    fileLink:{
        type: Array,
    },
    startdate:{
        type: Date,
    },
    enddate:{
        type: Date,
    }
}
);
module.exports = mongoose.model('assignment',AssignmentSchema);