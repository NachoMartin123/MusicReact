const mongoose = require('mongoose')
const { Schema } = mongoose;

const ArtistSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        nombre: { 
            type: String, 
            required: true,  unique : true, dropDups: true 
        }
    }
)



module.exports = mongoose.model('Artist', ArtistSchema)