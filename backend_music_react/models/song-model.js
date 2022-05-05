const mongoose = require('mongoose')
const { Schema } = mongoose;

const SongSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        title: { 
            type: String, 
            required: true 
        },
        album: {
            type: Schema.Types.ObjectId,
            ref: "Album"
        },
        duration: { 
            type: String, 
            required: true, 
            minLength: 4
        },
        videoclip:{ 
            type: Schema.Types.ObjectId,
            ref: "Videoclip"
        },
    },
)

/* SongSchema.methods.sayHi = function () {
    console.log(`Hi. My title is ${this.title}`)
}

SongSchema.statics.findByTitle = function (title) {
    return this.where({ name: new RegExp(title, "i") })//case sensitive
} */

//await User.
/*  .where("age")
    .gt(12) --> mayor que 
    .lt(31) --> age menor de 31
    .where("name")
    .equals("Kyle")
    .select("age") --> devuelve solo campo age
    .populate("bestFriend") --> enseña info de User==bestFriend
*/

/* Song.statics.findByArtist = function (artistName) {
    return this.where({ name: new RegExp(title, "i") })//case sensitive
}
 */
module.exports = mongoose.model('Song', SongSchema)