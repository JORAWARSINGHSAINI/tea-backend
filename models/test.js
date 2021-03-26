const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
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
        default: Date.now()
    },
    enddate:{
        type: Date,
    },
}
);
module.exports = mongoose.model('test',TestSchema);