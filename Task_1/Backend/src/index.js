import { app } from "./app.js";
import connectDb from "./db/index.js";

await connectDb().then(()=>{
    console.log("db Server was connected successfully")
}).catch(()=>{
    console.log("Problem while connecting to db")
})

app.listen(process.env.PORT,()=>{
    console.log("Server is listening at port "+process.env.PORT)
})

