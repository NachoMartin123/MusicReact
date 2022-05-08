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
    var artistNameWithBlank = req.params.artistName.replace("_", " ");

    console.log("getSongsByArtistName --- artistNameWithBlank:   *"+artistNameWithBlank+"*")
    
    await SongModel.find({})
        .populate({
            path : 'album',
            populate : {
                path : 'artist',
                /* match: { 
                    nombre:  "Avicii" 
                } */
            }
        })
        .then((songs) => {
            var filteredSongs =  songs.filter(song => song.album.artist.nombre == artistNameWithBlank);
            console.log("==============================================================")
            console.log("filteredSongs: "+ filteredSongs)
            //console.log(songs);
            if (!songs.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `No songs found for artist `+ artistNameWithBlank})
            }
            return res.status(200).json({ success: true, data: filteredSongs })
        })
        .catch(err => console.log(err))
        
    
}
 
module.exports = {
    createSong, 
    getSongsByArtistName,
}