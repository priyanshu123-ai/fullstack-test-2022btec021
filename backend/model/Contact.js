import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    title:{
        type:String,
        required:true

    },

    description:{
        type:String,
        required:true
    }
})


export const Contact = new mongoose.model("Contact",contactSchema)