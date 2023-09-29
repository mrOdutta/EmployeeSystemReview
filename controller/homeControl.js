const Home = require('../schema/home');
const Company = require('../schema/user'); // Assuming you have a User schema

// Render homepage 
module.exports.renderHomePage = function (req, res) {
    if (req.user) {
        res.redirect('/user/employee');
    } else {
        res.render('home', { title: 'ERS | home' });
    }
}

// Render signin page (form)
module.exports.renderSignInPage = function (req, res) {
    if (req.user) {
        res.redirect('/user/employee');
    } else {
        res.render('signin', { title: 'ERS | signin' });
    }
}

// Render signup page (form)
module.exports.renderSignUpPage = async function (req, res) {
    try {
        const companies = await Company.find({}).select('-employees');
        res.render('signup', { title: 'ERS | signup', companies });
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// Render create company page (form) 
module.exports.renderCreateCompanyPage = function (res) {
    res.render('create_company', { title: 'ERS | create company' });
}