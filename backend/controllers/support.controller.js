import Support from "../model/support.model.js";
import User from "../model/user.model.js";
import { validationResult } from "express-validator";

export const PostSupport = async (req, res) => {
  try {

     const errors = validationResult(req);
    
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    const { FullName, Email, Message } = req.body;

    // Check if a user with this email exists
    const email = Email;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({ message: "Please register on the site first." });
    }

    // Save support message
    const supportMessage = new Support({
      FullName,
      Email,
      Message,
    });

    await supportMessage.save();

    return res.status(200).json({ message: "Support message sent successfully.", data: supportMessage });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Something went wrong", error: err });
  }
};
