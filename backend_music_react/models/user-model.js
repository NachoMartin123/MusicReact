const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        nickname: { 
            type: String, 
            required: true 
        },
        password: {
            type: String, 
            ref: 'Album' 
        },
        email: { 
            type: String, 
            required: true
        },
        favourites: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'Song' 
            },
        ]
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('User', UserSchema)