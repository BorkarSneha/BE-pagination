const mongoose= require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        requiired:true
    }
})
module.exports=mongoose.model('User',userSchema)