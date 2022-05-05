const SongModel = require('../models/song-model')
const AlbumModel = require('../models/album-model')


createSong = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a song',
        })
    }

    const song = new SongModel(body)

    if (!song) {
        return res.status(400).json({ success: false, error: err })
    }

    song
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: song._id,
                message: 'created song -'+ song.title+"-",
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Song -'+song.title+'- not created!',
            })
        })
}

//await User.
/*  .where("age")
    .gt(12) --> mayor que 
    .lt(31) --> age menor de 31
    .where("name")
    .equals("Kyle")
    .select("age") --> devuelve solo campo age
    .populate("bestFriend") --> enseña info de bestFriend (objeto tipo user)
*/

getSongsByArtistName = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an artist name',
        })
    }

    console.log("getSongsByArtistName - req.body: "+req.body);

    SongModel
        .find({})
        .populate("album")
        .populate("artist")
        .where("artist.nombre")
        .equals(req.body.artistName)
        .then(() => {
            return res.status(201).json({
                success: true,
                data: songs
                //message: 'song list of '
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                //message: 'Song -'+song.title+'- not created!',
            })
        })
}
 
module.exports = {
    createSong, 
    getSongsByArtistName,
}