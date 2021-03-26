const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    
    'name': String,
    'students': Array,
    'teachers': Array,
    'dateCreated':{
        type: Date,
        default: Date.now()
    },
}
);
module.exports = mongoose.model('class',ClassSchema);

