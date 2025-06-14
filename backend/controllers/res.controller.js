import restaurent from "../model/res.model.js";

export const PostFood = async (req,res) => {
    const {foodname,rupees,image} = req.body;

    const response = new restaurent({
        foodname,rupees,image
    })
    await response.save();

    return res.status(200).send("food added successfully");
}

export const GetFood = async (req,res) => {

    const foodStore = await restaurent.find({});

    console.log(foodStore);

    return res.status(200).json({foodStore});
}