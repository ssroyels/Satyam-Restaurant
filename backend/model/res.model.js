import mongoose from "mongoose";

const resSchema = mongoose.Schema({
    foodname:String,
    rupees:Number,
    image:String
})

const restaurent = mongoose.model("Restaurent",resSchema);

export default restaurent;