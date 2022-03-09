const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let songModel = new Schema({
    name: {
        type: String
    },
    album: {
        type: String
    },
    duration:{
        type: String
    },
    likes:{
        type: Number
    }

}, {
        collection: 'songs'
    })
module.exports = mongoose.model('SongModel', songModel)