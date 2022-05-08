const mongoose = require('mongoose');

//nota: cambio de 'mongodb://localhost:27017/mr' a 'mongodb://mongo:27017/MusicReact'
//CAMBIAR A MONGO EN BUILD ENVIRONMENT
const connectionString = 'mongodb://localhost:27017/MusicReact';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;



//==============================================================================
///===============================insert data on start==========================
//==============================================================================
var UserModel = require("../models/user-model")
var ArtistModel = require("../models/artist-model")
var SongModel = require("../models//song-model")
var VideoclipModel = require("../models/videoclip-model")
var AlbumModel = require("../models/album-model")


async function seedArtists() {   
    console.log('Seeding artists '/*  + db.dbName */ + '...');
    const artists = [
            { nombre: "Avicii"},
            { nombre: "Tiesto"},
            { nombre: "Daft Punk"},
            { nombre: "Martin Garrix"},
            { nombre: "artist1"},
            { nombre: "artist2"},
            { nombre: "artist3"},
            { nombre: "artist4"},
            { nombre: "The Chainsmokers"},
            { nombre: "artist6"},
        ];
        //{ name: 'JK Rowling', bio: 'J.K. Rowling is the artists of the much-loved series of seven  novels, originally published between 1997 and 2007.' },
    
    for (artist of artists) {
        var newArtist = new ArtistModel(artist);
        newArtist._id = new mongoose.Types.ObjectId();
        await newArtist.save();
    }

    const a = await ArtistModel.find();
    console.log('artists: ', a);  
}

async function seedAlbums() {
    
    console.log('Seeding albums ' /* + db.dbName */ + '...');

    const Avicii = await ArtistModel.findOne({ nombre: 'Avicii' });
    const DaftPunk = await ArtistModel.findOne({ nombre: 'Daft Punk' });
    const Tiesto = await ArtistModel.findOne({ nombre: 'Tiesto' });
    const MartinGarrix = await ArtistModel.findOne({ nombre: 'Martin Garrix' });

    console.log("Avicii._id"+Avicii._id);
    console.log("DaftPunk._id"+DaftPunk._id);
    console.log("Tiesto._id"+Tiesto._id);
    console.log("MartinGarrix._id"+MartinGarrix._id);

    var albumsToInsert = [
        { nombre: 'TIM', artist: Avicii._id },
        { nombre: 'Stories', artist: Avicii._id },
        { nombre: 'X You', artist: Avicii._id },
        { nombre: 'Album1', artist: Avicii._id },
        { nombre: 'Album2', artist: Avicii._id },
        { nombre: 'Levels', artist: Avicii._id },
        { nombre: 'True', artist: Avicii._id },
        { nombre: 'AVICII_01', artist: Avicii._id },

        { nombre: 'Album3', artist: DaftPunk._id },
        { nombre: 'Album4', artist: DaftPunk._id },
        
        { nombre: 'Album5', artist: Tiesto._id },
        { nombre: 'Album6', artist: Tiesto._id },

        { nombre: 'Album7', artist: MartinGarrix._id },
        { nombre: 'Album8', artist: MartinGarrix._id }
    ];

    for (album of albumsToInsert) {

      var newAlbum = new AlbumModel(album);
      newAlbum._id = new mongoose.Types.ObjectId();
      await newAlbum.save();
    } 

    const a = await AlbumModel.find();
    console.log('albums: ', a);  
}

async function seedSongs() {
    console.log('Seeding songs ' /* + db.dbName */ + '...');

    const TIM = await AlbumModel.findOne({ nombre: 'TIM' });
    const Stories = await AlbumModel.findOne({ nombre: 'Stories' });
    const X_You = await AlbumModel.findOne({ nombre: 'X You' });
    const Album1 = await AlbumModel.findOne({ nombre: 'Album1' });
    const Album2 = await AlbumModel.findOne({ nombre: 'Album2' });
    const Levels = await AlbumModel.findOne({ nombre: 'Levels' });
    const True = await AlbumModel.findOne({ nombre: 'True' });
    const AVICII_01 = await AlbumModel.findOne({ nombre: 'AVICII_01' });

    const Album3 = await AlbumModel.findOne({ nombre: 'Album3' });
    const Album4 = await AlbumModel.findOne({ nombre: 'Album4' });

    const Album5 = await AlbumModel.findOne({ nombre: 'Album5' });
    const Album6 = await AlbumModel.findOne({ nombre: 'Album6' });

    const Album7 = await AlbumModel.findOne({ nombre: 'Album7' });
    const Album8 = await AlbumModel.findOne({ nombre: 'Album8' });

    let songsToInsert = [ 
        {title: "Levels", album: Levels._id,duration: "3:19"},
        {title: "Hey brother", album: True._id,duration: "3:23"},
        {title: "Wake me up", album: True._id,duration: "3:23"},
        {title: "All you need is love",album: Album2._id,duration: "3:23"},
        {title: "Dancing in my head",album: Album1._id,duration: "3:23"},
        {title: "Lovers on the sun", album: Album1._id,duration: "3:23"},
        {title: "You Be Love (ft Billy Raffoul)",album: AVICII_01._id,duration: "3:23"},
        {title: "Without you ft Sandro Cavazza",album: Album1._id,duration: "3:23"},
        {title: "Our love",album: Album2._id,duration: "3:23"},
        {title: "Addicted to you",album: True._id,duration: "3:23"},
        {title: "I could be the one",album: Album1._id,duration: "3:23"},
        {title: "Sunset Jesus",album: Stories._id,duration: "3:23"},
        {title: "The Nights",album: Album2._id,duration: "3:23"},
        {title: "Fade Into Darkness",album: Album2._id,duration: "3:23"},
        {title: "You make me",album: Album2._id,duration: "3:23"},
        {title: "Broken Arrows",album: Stories._id,duration: "3:23"},
        {title: "For A Better Day",album: Stories._id,duration: "3:23"},
        {title: "Seek Bromance",album: Album2._id,duration: "3:23"},
        {title: "Silhouettes",album: Album2._id,duration: "3:23"},
        {title: "X You",album: X_You._id,duration: "3:23"},
        {title: "Tough Love",album: TIM._id,duration: "3:23"},
        {title: "Pure grinding",album: Stories._id,duration: "3:23"},
        {title: "Taste the feeling ft Conrad Sewell",album: Album2._id,duration: "3:23"},
        {title: "Bad Reputation",album: TIM._id,duration: "3:23"},

        {title: "One More Time",album: Album3._id,duration: "3:23"},
        {title: "Get Lucky",album: Album3._id,duration: "3:23"},
        {title: "Around the world",album: Album3._id,duration: "3:23"},
        {title: "Harder, Better, Faster, Stronger",album: Album4._id,duration: "3:23"},
        {title: "I Feel It Coming",album: Album4._id,duration: "3:23"},
        {title: "Da funk",album: Album4._id,duration: "3:23"},

        {title: "Red lights",album: Album5._id,duration: "3:23"},
        {title: "Wasted",album: Album5._id,duration: "3:23"},
        {title: "Ritual",album: Album6._id,duration: "3:23"},
        {title: "The Business",album: Album6._id,duration: "3:23"},
        {title: "Boom",album: Album5._id,duration: "3:23"},
        {title: "Jackie Chan",album: Album6._id,duration: "3:23"},

        {title: "Together",album: Album7._id,duration: "3:23"},
        {title: "Animals",album: Album7._id,duration: "3:23"},
        {title: "Scare to be lonely",album: Album8._id,duration: "3:23"},
        {title: "Summer days",album: Album8._id,duration: "3:23"},
        {title: "Home",album: Album7._id,duration: "3:23"},
        {title: "High on life",album: Album8._id,duration: "3:23"},
        {title: "No sleep",album: Album7._id,duration: "3:23"},
        {title: "These are the times",album: Album8._id,duration: "3:23"},
        {title: "So far away",album: Album7._id,duration: "3:23"},
        {title: "Pizza",album: Album8._id,duration: "3:23"},
        {title: "The Only Way Is Up",album: Album7._id,duration: "3:23"},
        {title: "Forbidden voices",album: Album7._id,duration: "3:23"},
        {title: "Dont look down",album: Album7._id,duration: "3:23"},
        {title: "In the Name of Love",album: Album7._id,duration: "3:23"},
    ];

    for (song of songsToInsert) {

        var newSong = new SongModel(song);
        newSong._id = new mongoose.Types.ObjectId();
        await newSong.save();
      } 
      const a = await SongModel.find();
      console.log('songs: ', a);  
} 

async function clearData() {
    await SongModel.deleteMany({});
    await AlbumModel.deleteMany({});
    await ArtistModel.deleteMany({});
}

async function insertData() {
/*      await seedArtists();
    await seedAlbums();
    await seedSongs();   */

    const author = await AlbumModel.find({nombre: "True"})
        .populate("artist");//populate nameProperty in Schema

    const author2 = await ArtistModel.find({_id: "6273f4932a0a33ff49d56854"});

 /*    const SongCtrl = require('../controllers/song-ctrl')
    const ArtistCtrl = require('../controllers/artist-ctrl')

    var a = await SongCtrl.getSongsByArtistName;
    var b = await ArtistCtrl.getArtists.res;

    console.log(a);
    console.log("------------------------------------");
    console.log(b);
  	 */
}


//clearData();
insertData();



module.exports = db;