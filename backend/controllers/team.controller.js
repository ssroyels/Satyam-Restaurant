import Team from "../model/team.model.js";


export const getTeam= async (req,res) => {

    try{
        const TeamStore = await Team.find({});
        console.log(TeamStore)
        return res.status(200).json({TeamStore});

    } catch(err) {
        console.log(err);
        return res.status(404).send(err);
    }
}

export const setTeam = async (req,res) => {

    try{

    const {image,name,department} = req.body;

    const TeamModel = await Team.findOne({image});

    if(TeamModel){
        return res.status(400).send("this model is already exists")

    }

    const TeamSection = await new Team({
        image,
        name,
        department
    })
    await TeamSection.save()

    return res.status(200).send("team section is created successfully");

    } catch(err) {
        console.log(err);
        return res.status(404).send(err);
    }
 
}