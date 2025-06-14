import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String
    }
    
})

const Item = mongoose.model("Item",ItemSchema);

export default Item;