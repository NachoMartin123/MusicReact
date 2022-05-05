const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('express-async-errors');//brings use of "await" calls in express

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.use(methodOverride());
//app.use(cookieParser());
//app.use(express.static(__dirname + '/public'));

const db = require('./db')
const apiPort = 5000

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

db.on('connected', function () {  
    console.log(`Database connection open to ${db.connectionString} listening in port ${apiPort}`);
}); 

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

db.on('disconnected', function () {  
    console.log('Database disconnected'); 
});

//=======================================================================================
//================================== routes middleware ==================================
const ArtistRouter = require("./routes/artist-router");
const SongRouter = require("./routes/song-router");
const UserRouter = require("./routes/user-router");

app.use('/', ArtistRouter);
app.use('/', SongRouter);
app.use('/', UserRouter);







