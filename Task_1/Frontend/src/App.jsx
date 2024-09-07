import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [message, setMessage] = useState({})
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [feedback,setFeedback]=useState("");
  const handleSubmit=async (e)=>{
    e.preventDefault();
      try {
        const response=await axios.post("http://localhost:3000/feedback/addFeedback",{
          data:{
            name,email,message:feedback
          }
        })
        console.log(response)
        setMessage({type:1,message:response.data.message})
      } catch (error) {
        console.log(error)
        setMessage({type:2,message:error.response.data.message})
      }
  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className=" flex flex-col justify-center items-center gap-y-[2vh] bg-red-400 w-[340px] min-h-[330px] rounded-lg">
            <div className='text-3xl font-semibold text-custom  w-full text-center'>Feedback / Message</div>
              <div>
                    <form className='w-full flex flex-col justify-center items-center gap-y-[2vh]'>
                      <input className='w-[290px] p-2 rounded-md' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
                      <input className='w-[290px] p-2 rounded-md' placeholder='Gmail id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      <textarea className='w-[290px] p-2 rounded-md' placeholder='Your Message' value={feedback} onChange={(e)=>setFeedback(e.target.value)}/>
                      {message&& <div className={` text-xs text-white w-[290px] text-right h-[5px]`}>{message.message}</div> }
                      <input className='w-[100px] bg-white p-2 rounded-md font-semibold' type="submit" onClick={(e)=>handleSubmit(e)}/>
                    </form>
              </div>
            </div>
    </div>
  )
}

export default App
