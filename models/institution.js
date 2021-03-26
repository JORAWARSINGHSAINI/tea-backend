const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
    name: String,
    email : String,
    city: String,
    country: String,
    phoneno: String,
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