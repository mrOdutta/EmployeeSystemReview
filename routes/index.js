const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeControl');

// Define your routes with callback functions
router.get('/', homeController.renderHomePage);
router.get('/signin', homeController.renderSignInPage);
router.get('/signout', homeController.renderSignOutPage);
router.get('/create-company', homeController.renderCreateCompanyPage);

// Handle form submissions with POST requests
router.post('/create-company', homeController.createCompany);

module.exports = router;

module.exports.renderHomePage = function(req, res) {
    try {
        // Your function implementation
        res.render('home', { title: 'ERS | home' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
