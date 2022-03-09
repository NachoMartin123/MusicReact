const mongoose = require('mongoose');

let artistModel = mongoose.Schema({
    artistName: String
    
    //img: {
    //    type: String
    //}
    }, {
        collection: 'artists'
});
/**
 * app with a front-end that needs id field instead of _id
 * you have to override toJSON method that map default object to a custom object
 */
artistModel.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
module.exports = mongoose.model('ArtistModel', artistModel)
