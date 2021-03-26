const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    location:{
        type:String,
    },
    classes: {
        type: Array,
    },
    teachers:{
        type: Array,
    },
    students:{
        type: Array,
    }
}
);

module.exports = mongoose.model('institution',InstitutionSchema);