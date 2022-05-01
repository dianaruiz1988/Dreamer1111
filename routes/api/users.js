//The routes will route where the data gets rendered

// /routes/api/users.js
const express = require('express');
const router = express.Router();

//importing the controller on line 8
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggin');

// POST /api/users
//first argument is the url address
//second argument is callback function that contains request response - usually request/response goes here but he is doing it in controllers and then importing the controller here 

router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
