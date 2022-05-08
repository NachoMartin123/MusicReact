const mongoose = require('mongoose')
const { Schema } = mongoose;


const AlbumSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        nombre: { 
            type: String, 
            required: true 
        },
        artist: { 
            type: Schema.Types.ObjectId, 
            ref: 'Artist'
        },
        dateRelease: Date
    },
    { timestamps: true },
)

module.exports = mongoose.model('Album', AlbumSchema)