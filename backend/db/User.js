const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    name:String,
    password:String,
    email:String
})
module.exports=mongoose.model('users',userschema);