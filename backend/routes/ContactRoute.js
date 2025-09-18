import express from "express"
import { EmailController } from "../controllers/Contact.controller.js";



const contactRouter = express.Router();

contactRouter.post("/contact",EmailController)


export default contactRouter;