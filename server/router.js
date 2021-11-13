const router = require('express').Router();
const authController = require ('./controllers/auth')
const refreshController = require ('./controllers/refresh')
const tracksController = require ('./controllers/tracks')

router.get('/login', authController.login);
router.get('/callback', authController.getToken);
router.get('/refresh', refreshController.getRefreshToken);
router.get('/tracks', tracksController.getText);
router.post('/tracks', tracksController.postText);









module.exports = router
