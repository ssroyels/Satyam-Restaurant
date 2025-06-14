import mongoose from "mongoose";

const BlogSchema = mongoose.Schema({
    date:String,
    title:String,
    image:String,
})

const Blog = mongoose.model("Blog",BlogSchema);

export default Blog;