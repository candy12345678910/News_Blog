import React, { useState } from 'react'
import { imageURL } from './imageURL';
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"

function Register() {

    const navigate=useNavigate()
    const [hide, setHide]=useState(1)
    const [confhide, setConfHide]=useState(1)

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [conf, setConf]=useState('')
    
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    imageURL[Math.ceil(Math.random()*imageURL.length-1)]

    function validatePassword(password) {
        const messages = [];
        
        if (password.length < 8) {
            toast.error("Your password must be at least 8 characters long.");
            return true
        }
        if (!/[A-Z]/.test(password) && !/[a-z]/.test(password)) {
            toast.error("Your password must include at least one letter (A-Z) or (a-z).");
            return true
        }
        if (!/\d/.test(password)) {
            toast.error("Your password must include at least one number (0-9).");
            return true
        }
        if (!/[@$!%*?&#]/.test(password)) {
            toast.error("Your password must include at least one special character (e.g., !@#$%^&*).");
            return true
        }
        if(password!=conf){
            toast.error("Confirm password doesn't match")
            return true
        }
    }
    const handleSubmitForm=async (e)=>{
        e.preventDefault()
        if(!emailRegex.test(email)){
            toast.error("Email format is wrong")
            return
        }
        // if(password.length!=8){
        //     toast.error("Password must be at least 8 characters")
        //     return
        // }
        // if(!validateStrongPassword(password)){
        //     toast.error("Password must be at least 8 characters")
        //     return
        // }
        if(validatePassword(password)) return
        // if(password!=conf){
        //     toast.error("Confirm password doesn't match")
        //     return
        // }
        // else{
            try{
                const res=await axios.post(import.meta.env.VITE_BACKEND_DATABASE+"/register",{
                    name,
                    email,
                    password,
                    img: imageURL[Math.ceil(Math.random()*imageURL.length-1)]
                },{ withCredentials: true })
                
                if(res.status==200){
                    // console.log(res.data)
                    navigate("/profile")
                }
                else{
                    // console.log(res.data)
                    toast.error('Email already exist')
                }
            }catch(err){
                console.log("Error occured "+err)
                toast.error('Registration failed')
            }
        // }
    }

    return (
        <>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        <div className='bg-[#111725] h-screen flex flex-col gap-3 justify-center items-center'>
            
            <p className='text-[2.3vmax] font-medium text-[white]'>Register</p>
            
            <div className='overflow-hidden w-[50vw] h-auto bg-[#02030e8a] rounded-md flex flex-row gap-5 justify-center items-center'>

                <img className="hidden md:block w-[30%] h-[100%]" src="https://images.pexels.com/photos/3183149/pexels-photo-3183149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile"/>

                <form method='post' className="w-full flex flex-col gap-5 p-[3vmax]" onSubmit={handleSubmitForm}>
                        <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type="text" placeholder='Name' name="Name" onChange={(e)=>setName(e.target.value)}/>

                        <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type="text" placeholder='Email' name="email" onChange={(e)=>setEmail(e.target.value)}/>
                                
                        <div className='flex flex-row items-center gap-1'>
                            <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type={hide?"password":"text"} placeholder='Password' name="password" onChange={(e)=>setPassword(e.target.value)}/>
                            <p className="text-[1.3vmax] text-zinc-50" onClick={()=>setHide(!hide)}>{hide?<BiSolidHide/>:<BiSolidShow/>}</p>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type={confhide?"password":"text"} placeholder='Confirm password' name="password" onChange={(e)=>setConf(e.target.value)}/>
                            <p className="text-[1.3vmax] text-zinc-50" onClick={()=>setConfHide(!confhide)}>{confhide?<BiSolidHide/>:<BiSolidShow/>}</p>
                        </div>
                        <button className='transition duration-375 w-full text-[#ffffff] text-[1.3vmax] font-medium px-[1.1vmax] py-[.5vmax] bg-[#233c91] rounded-md hover:bg-[#111d47] hover:text-[#9daedb]'>Register</button>
                </form>
            </div>
            <p className='text-zinc-50 text-[1vmax] hover:cursor-pointer'>Already an User? <span className='text-customLiteBlue font-medium' onClick={()=>navigate("/login")}>Login</span></p>
            <button className='text-zinc-50 px-[1vmax] py-[.3vmax] font-medium text-[1.3vmax] bg-[#233c91] rounded-md hover:bg-[#111d47] hover:text-[#9daedb]' onClick={()=>navigate("/")}>Go to Home</button>
        </div>
        </>
    )
}

export default Register
