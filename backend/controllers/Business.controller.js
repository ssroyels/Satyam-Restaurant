import Business from "../model/business.model.js";


export const getBusiness = async (req,res) => {
    try{
        const BusinessStore = await Business.find({});
        if(BusinessStore.length===0) {
            return res.status(200).send("data would be empty");
        }
        return res.status(200).json({BusinessStore});

    } catch(err) {
        console.log(err);
        return res.status(400).send(err);
    }
}
export const setBusiness = async (req, res) => {
  try {
    const { image, title, paragraph } = req.body;
    const request = new Business({ image, title, paragraph });
    await request.save();
    return res.status(200).send("business part created successfully");
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};
