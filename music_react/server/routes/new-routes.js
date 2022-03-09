let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
let newSchema = require('../models/new-model');

/* router.route('/create').post((req, res, next) => {
    artistSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
}); */
module.exports = router;

/*router.route('/edit/:id').get((req, res) => {
    user.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})*/