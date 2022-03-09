let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
let artistModel = require('../models/artist-model');

router.route('/create').post((req, res, next) => {
    artistModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
module.exports = router;

