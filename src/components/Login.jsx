import React, { useState } from 'react'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate()
    const [hide, setHide]=useState(1)

    return (
        <>
        <div className='bg-[#111725] h-[100vh] flex flex-col gap-3 justify-center items-center'>

            <div className='w-[50vw] h-auto bg-[#02030e57] p-[3vmax] rounded-[3vm] flex flex-col gap-5 justify-center items-center'>
                <p className='text-[2.3vmax] font-medium text-[white]'>Login</p>

                <form method='post' className="w-full flex flex-col gap-5" action="#">
                        <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type="text" placeholder='Email' name="email"/>
                        <div className='flex flex-row items-center gap-1'>
                            <input className='p-[.3vmax] w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type={hide?"password":"text"} placeholder='Password' name="password"/>
                            <p className="text-[1.3vmax] text-zinc-50" onClick={()=>setHide(!hide)}>{hide?<BiSolidHide/>:<BiSolidShow/>}</p>
                        </div>
                </form>

                <button className='transition duration-375 w-full text-[#ffffff] text-[1.3vmax] font-medium px-[1.1vmax] py-[.5vmax] bg-customLiteBlue rounded-md hover:bg-[#1c3074]'>Login</button>

                <p className='text-zinc-50 text-[1vmax] hover:cursor-pointer'>Not an User? <span className='text-customLiteBlue font-medium' onClick={()=>navigate("/register")}>Register</span></p>
            </div>

        </div>
        </>
    )
}

export default Login
