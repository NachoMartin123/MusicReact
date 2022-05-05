const ArtistSchema = require('../models/artist-model')

createArtist = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a artist',
        })
    }

    const artist = new ArtistSchema(body)

    if (!artist) {
        return res.status(400).json({ success: false, error: err })
    }

    artist
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: artist._id,
                message: 'Artist created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Artist not created!',
            })
        })
}

getArtists = async (req, res) => {
    //res.send("Todo OK Jose Luis")
    await ArtistSchema
        .find({}, (err, artists) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!artists.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `Artist not found` })
            }
            return res.status(200).json({ success: true, data: artists })
        }).catch(err => console.log(err)) 
}

module.exports = {
    createArtist, 
    getArtists,
}