const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

router.get('/ping', controller.Ping);
router.get('/', controller.user_getAll);
router.post('/', controller.user_add);
router.put('/', controller.user_update);

module.exports = router;