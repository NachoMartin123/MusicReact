const express = require('express')

const ArtistCtrl = require('../controllers/artist-ctrl')

const router = express.Router()

router.get("/artists", ArtistCtrl.getArtists)


/* router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies) */

module.exports = router

