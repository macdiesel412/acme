var express = require('express');
var router = express.Router();
var _ = require('lodash')
var util = require("util")

var MODELS = ['anvil','wile','roadrunner'];
var PACKAGES = ['std', 'super', 'elite'];

/* GET home page. */
router.post('/acme/api/v45.1/order', function(req, res, next) {
    req.checkBody('model', util.format('Model must be one of %s', MODELS)).isIn(MODELS);
    req.checkBody('package', util.format('package must be one of %s', PACKAGES)).isIn(PACKAGES);

    var errors = req.validationErrors();
    if(errors) {
        res.code = 400;
        res.json({"message":errors}, 400);
        return;
    }

    res.code = 200;
    res.json({'order':randomInt(0,Number.MAX_SAFE_INTEGER)});
});

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

module.exports = router;
