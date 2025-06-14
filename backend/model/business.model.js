import mongoose from "mongoose";

const BusinessSchema = mongoose.Schema({
    image:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        unique:true
    },
    paragraph:{type:String}
})

const Business = mongoose.model("Business",BusinessSchema);

export default Business;