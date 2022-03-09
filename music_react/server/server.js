let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');//provides Express middleware to enable CORS with various options.
let bodyParser = require('body-parser');//middleware to read data from form
let database = require('./database/db');
const db = 'mongodb://admin:password@localhost:27017/musicReact?authSource=admin' ;


/*Mongoose models suppports all CRUD functions, we managed then in the controller
*   create
    findAll
    findOne
    update
    delete
    deleteAll
    findAllPublished
*/
const artistRoute = require('./routes/artist-routes');
const songRoute = require('./routes/song-routes');
const newRoute = require('./routes/new-routes');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/artists', artistRoute); //todos las artist-routes iran predecidas con '/artists'
app.use('/songs', songRoute);
app.use('/news', newRoute);

const port = process.env.PORT || 4000; //puerto listen request CRUD
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})




mongoose.Promise = global.Promise;
mongoose.connect(db, {
    useNewUrlParser: true
    })
    .then(() => {
        console.log('Database connected sucessfully !')
    },
    error => {
        console.log('Database could not be connected : ' + error)
    }
)





// Error Handling
//app.use((req, res, next) => {
//    next(createError(404));
//});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
/**
 //const client = new MongoClient(url);
/*
app.post("/postArtist", (req, res) => {
    MongoClient.connect(url, function(err, client) {
        db.collection('quotes').insertOne(req.body, (err, data) => {
            if(err) return console.log(err);
            res.send(('saved to db: ' + data));
        })
        client.close();
    });
});*/


const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) 
        return console.error(err)
    console.log('Connected to Database')
  })

  MongoClient.connect(db, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('star-wars-quotes');
        const artistsCollection = db.collection('artists');

        app.post('/urlFormPostArtist', (req, res) => {
            artistsCollection.insertOne(req.body)
              .then(result => {
                res.redirect('/newArtist')
              })
              .catch(error => console.error(error))
        })

        app.get('/artists', (req, res) => {
            db.collection('artists').find().toArray()
                .then(results => results)
                .catch(error => console.error(error))
            // ...
        })
    })
    .catch(error => console.error(error))