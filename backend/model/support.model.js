import mongoose from "mongoose";

const SupportSchema = mongoose.Schema({
    FullName:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Message:{type:String}

})

const Support = mongoose.model("Support",SupportSchema);

export default Support;