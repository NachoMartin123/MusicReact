const VideoclipSchema = require('../models/videoclip-model')
const SongSchema = require('../models/song-model')

/* createVideoclip = async (req, res)=> {
    const authors = await Author.find().populate('books');
    res.send(authors);
}

getVideoclip = async (req, res)=> {
    const videoclip = await Videoclip.findById(req.params.id).populate(‘books’);
    res.send(author);
}
 */
module.exports = {
    createVideoclip,
    getVideoclip
}