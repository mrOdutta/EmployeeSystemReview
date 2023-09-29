const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    sender :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        req : "User",
        required : true
    },
    reciever : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    log: {
        type: String,
        require : true
    },
    rating :{
        type : Number ,
        min : 0,
        max : 6,
        require: true
    } 
}, {timestamps: true});
const feedback = mongoose.model('Feedback', feedbackSchema);
module.exports=feedback;