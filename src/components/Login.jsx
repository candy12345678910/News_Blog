import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'


function Login() {
    
    const navigate=useNavigate()
    const [hide, setHide]=useState(1)
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    
    useEffect(()=>{
        const login=async ()=>{
            await axios.post(import.meta.env.VITE_BACKEND_DATABASE+'/login',{
                email,
                password
            },{ withCredentials: true })
            .then((res)=>{
                if(res.status==200){
                    navigate("/profile")
                }
                else{
                    console.log(res.data)
                }
            })
            .catch((err)=>{
                console.log("Error occured while login: "+err)
            })
        }

        login()
    },[])

    const handelLogin=(e)=>{
        e.preventDefault()
        
    }

    return (
        <>
        <div className='bg-[#111725] h-screen flex flex-col gap-3 justify-center items-center'>
            
            <p className='text-[2.3vmax] font-medium text-[white]'>Login</p>

            <div className='overflow-hidden w-[50vw] h-auto bg-[#02030e57] rounded-md flex flex-row gap-5 justify-center items-center'>
                <img className="hidden md:block w-[25%] h-[100%] " src="https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile"/>

                <form method='post' className="w-full flex flex-col gap-5 p-[3vmax]" onSubmit={handelLogin}>
                        <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type="text" placeholder='Email' name="email" onChange={(e)=>setEmail(e.target.value)}/>
                        <div className='flex flex-row items-center gap-1'>
                            <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type={hide?"password":"text"} placeholder='Password' name="password" onChange={(e)=>setPassword(e.target.value)}/>
                            <p className="text-[1.3vmax] text-zinc-50" onClick={()=>setHide(!hide)}>{hide?<BiSolidHide/>:<BiSolidShow/>}</p>
                        </div>
                <button className='transition duration-375 w-full text-[#ffffff] text-[1.3vmax] font-medium px-[1.1vmax] py-[.5vmax] bg-[#233c91] rounded-md hover:bg-[#1c3074] hover:text-[#9daedb]'>Login</button>
                
                </form>


            </div>
                <p className='text-zinc-50 text-[1vmax] hover:cursor-pointer'>Not an User? <span className='text-customLiteBlue font-medium' onClick={()=>navigate("/register")}>Register</span></p>
                <button className='text-zinc-50 px-[1vmax] py-[.3vmax] font-medium text-[1.3vmax] bg-[#233c91] rounded-md hover:bg-[#1c3074] hover:text-[#9daedb]'>Go to Home</button>
        </div>
        </>
    )
}

export default Login
