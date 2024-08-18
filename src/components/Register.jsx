import React, { useState } from 'react'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Register() {
    const navigate=useNavigate()
    const [hide, setHide]=useState(1)
    const [msg, setMsg]=useState(0)

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')

    const handleSubmit=async (e)=>{
        e.preventDefault()

        try{
            const res=await axios.post(import.meta.env.VITE_BACKEND_DATABASE+"/register",{
                name,
                email,
                password
            },{ withCredentials: true })
            
            if(res.status==200){
                console.log(res.data)
                navigate("/profile", {state:{ email: email, name: name }})
            }
            else{
                console.log(res.data)
                setMsg(1)
            }
        }catch(err){
            console.log("Error occured "+err)
        }
    }

    return (
        <>
        <div className='bg-[#111725] h-screen flex flex-col gap-3 justify-center items-center'>
            
            <p className='text-[2.3vmax] font-medium text-[white]'>Register</p>
            
            <div className='overflow-hidden w-[50vw] h-auto bg-[#02030e8a] rounded-md flex flex-row gap-5 justify-center items-center'>

                <img className="hidden md:block w-[30%] h-[100%]" src="https://images.pexels.com/photos/3183149/pexels-photo-3183149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile"/>

                <form method='post' className="w-full flex flex-col gap-5 p-[3vmax]" onSubmit={handleSubmit}>
                        <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type="text" placeholder='Name' name="Name" onChange={(e)=>setName(e.target.value)}/>

                        <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type="text" placeholder='Email' name="email" onChange={(e)=>setEmail(e.target.value)}/>
                        <p className='text-[#ff3131] text-[1.2vmax]' style={{display: msg?"block":"none"}}>Email Already exist</p>
                        
                        <div className='flex flex-row items-center gap-1'>
                            <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type={hide?"password":"text"} placeholder='Password' name="password" onChange={(e)=>setPassword(e.target.value)}/>
                            <p className="text-[1.3vmax] text-zinc-50" onClick={()=>setHide(!hide)}>{hide?<BiSolidHide/>:<BiSolidShow/>}</p>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type={hide?"password":"text"} placeholder='Confirm password' name="password"/>
                            <p className="text-[1.3vmax] text-zinc-50" onClick={()=>setHide(!hide)}>{hide?<BiSolidHide/>:<BiSolidShow/>}</p>
                        </div>
                        <button className='transition duration-375 w-full text-[#ffffff] text-[1.3vmax] font-medium px-[1.1vmax] py-[.5vmax] bg-customLiteBlue rounded-md hover:bg-[#1c3074]'>Register</button>
                </form>
            </div>
            <p className='text-zinc-50 text-[1vmax] hover:cursor-pointer'>Already an User? <span className='text-customLiteBlue font-medium' onClick={()=>navigate("/login")}>Login</span></p>

        </div>
        </>
    )
}

export default Register
