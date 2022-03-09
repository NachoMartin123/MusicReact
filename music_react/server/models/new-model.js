const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let newModel = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    img:{
        type: String
    },
    creationDate:{
        type: Date
    }
}, {
        collection: 'news'
    })
module.exports = mongoose.model('NewModel', newModel)