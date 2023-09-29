/*
User Sehema Contains:
1. UserName
2. Password
3. UserEmail
4. TypeOfUser
AdmitRank of user
objectId of company
Array of objectId
*/

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    email:{
        type:String ,
        require:true,
        unique : true
    },
    password :{
        type:String,
        require:true
    },
    type :{
        type:Number,
        require: true,
        enum : ['employee', 'admin']
    },
    adminRank : {
        type: Number,  //0 is not an Admin and 5 is the highest rank
        default : Number.MAX_VALUE
    },
    company : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'Company',
        require : true
    },
    feedBackRecieved : [{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Feedback"
    }],
    feedbackpending : [{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    rating : {
        type : Number,
        default : 0
    }
}, {timestamps : true});

const User = mongoose.model('User', userSchema);
module.exports=User;