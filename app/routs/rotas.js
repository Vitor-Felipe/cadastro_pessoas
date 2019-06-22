const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

router.get('/ping', controller.Ping);

module.exports = router;