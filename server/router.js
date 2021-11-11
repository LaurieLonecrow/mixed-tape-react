const router = require('express').Router();
const authController = require ('./controllers/auth')
const refreshController = require ('./controllers/refresh')

router.get('/login', authController.login);
router.get('/callback', authController.getToken);
router.get('/refresh', refreshController.getRefreshToken);








module.exports = router
