import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); 

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactEmail(useremail, title, description,name) {
  try {
    await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: useremail,
      subject: title || "New Contact Request", 
      text: `Contact Details:\n\n${description}`, 
      html: `
        <h2>Contact Details ${name}</h2>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Description:</strong> ${description}</p>
      `, // nicely formatted HTML body
    });

    console.log("Contact email sent successfully!");
  } catch (error) {
    console.error("Error sending contact email:", error);
  }
}
