import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({
    path:"./.env"
})
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.ORIGIN
}))

import feedbackRoute  from './routes/feedback.route.js'
app.use("/feedback",feedbackRoute)
export {app};