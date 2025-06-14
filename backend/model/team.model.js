import mongoose from "mongoose";

const TeamSchema = mongoose.Schema({
    image:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    department:{
        type:String,
        required:true,
        unique:true
    }

})

const Team = mongoose.model("Team",TeamSchema);

export default Team;