// home Shema will be saved the Details Related the Company Infomation

const mongoose = require('mongoose');

// Creation 
 const homeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    },
    employee : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }]
}, {timestamps: true});

const Home = mongoose.model('Home', homeSchema);
module.exports = Home;

 