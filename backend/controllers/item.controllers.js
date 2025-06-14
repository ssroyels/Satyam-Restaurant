import Item from "../model/items.model.js";

export const getItem= async (req,res) => {

    try{
        const itemStore = await Item.find({});
        console.log(itemStore)
        return res.status(200).json({itemStore});

    } catch(err) {
        console.log(err);
        return res.status(404).send(err);
    }
}
export const postItem = async (req,res) => {

    

    try{
        const {title,image} = req.body;

        const items = new Item({
            title:title,
            image:image
        })

        await items.save();
        return res.status(200).send("Items added successfully");

    } catch(err) {
        console.log(err);
        return res.status(400).send(err);
    }
}