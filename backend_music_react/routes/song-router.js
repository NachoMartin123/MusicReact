const express = require('express')

const SongCtrl = require('../controllers/song-ctrl')

const router = express.Router()

router.get("/artist_detail/:artistName", SongCtrl.getSongsByArtistName)

/* router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies) */

module.exports = router