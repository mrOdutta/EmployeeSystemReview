const mongoose = require('mongoose');
const url = process.env.ERS_DB_URL;
mongoose.connect(url); 
