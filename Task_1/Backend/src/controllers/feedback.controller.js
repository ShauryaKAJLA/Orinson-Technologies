import { Mongoose } from "mongoose";
import { Feedback } from "../models/feedback.model.js";

const addFeedback=async (req,res)=>{
    try {
        const {name,email,message}=req.body.data;
        if(!name||!email||!message)
        {
            return res.status(400).json({
                statusCode:400,message:"All Fields are required",success:false
            })
        }
        if([name,email,message].some(item=>item.trim()==""))
        {
            return res.status(400).json({
                statusCode:400,message:"All Fields are required",success:false
            })
        }
            const newFeedback=Feedback.create({
                name,email,message
            })
            return res.status(200).json({statusCode:200,message:"Feedback was submitted successfully",success:true})
    } catch (error) {
        return res.status(400).json({
            statusCode:400,message:error.message,success:false
        })
    }
}

export {addFeedback}