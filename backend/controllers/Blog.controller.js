import Blog from "../model/blog.model.js";

export const GetBlog = async (req,res) => {

    try{

        const BlogStore = await Blog.find({});
        return res.status(200).json({BlogStore});

    } catch(err) {
        console.log(err);
        return res.status(404).send(err);
    }
}

export const SetBlog = async (req,res) => {

    try{

    const {date,title,image} = req.body;

    const BlogModel = await new Blog({
        date,title,image
    })
    await BlogModel.save();
    return res.status(200).send("Blog create successfully");

    }
     catch(err) {
console.log(err);
return res.status(400).send(err);
     }
  
}