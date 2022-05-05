const mongoose = require('mongoose')
const { Schema } = mongoose;

const VideoclipSchema = Schema(
    {
        _id: Schema.Types.ObjectId,
        song:{ 
            type: Schema.Types.ObjectId,
            ref: "Song"
        },
        /* artist:{ 
            type: Schema.Types.ObjectId,
            ref: "Artist"
        }, */
        videoUrl:{ 
            type: String, 
            required: true 
        },
    }
)

module.exports = mongoose.model('Videoclip', VideoclipSchema)