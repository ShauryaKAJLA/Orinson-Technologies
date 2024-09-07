import mongoose from "mongoose";

const FeedbackSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    message:{
        type:String,
        required:[true,"Message is required"]
    }
})


export const  Feedback=mongoose.model("Feedback",FeedbackSchema)