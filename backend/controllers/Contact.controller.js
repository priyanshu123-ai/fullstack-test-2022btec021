import { Contact } from "../model/Contact.js";
import { sendContactEmail } from "../utils/nodemailer.js";

export const EmailController = async (req, res) => {
  try {
    const {name,email, title, description } = req.body;

    if (!title || !description || !name || !email) {
      return res.status(401).json({
        success: false,
        message: "All fieldes are required",
      });
    }

 

    await sendContactEmail(email, title,description,name);

    const contact = await Contact.create({
      name,
      email,
      title,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Contact Successful",
      contact,
      name,
      email
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
