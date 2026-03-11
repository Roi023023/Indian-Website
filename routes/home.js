// home routes
const express = require('express');
const HomeController = require('../controllers/home');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, HomeController.index);

router.get('/homepage', (req, res) => {
    res.redirect('/');
});

module.exports = router;