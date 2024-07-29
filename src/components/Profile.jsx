import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { LuUserCircle2 } from "react-icons/lu";
import axios from "axios"
import Loader from './Loader'

function Profile() {
    const navigate=useNavigate()
    const token = Cookies.get('newsToken');
    if(token){
        
    }
    else{
        navigate("/login")
    }

    return (    
        <>
            <div className='bg-[#111725] h-[100vh] p-[3vmax] flex flex-col gap-4'>
                <div className='flex flex-row gap-5 items-center'>
                    <LuUserCircle2 className='p-[1.3max] text-[#eaf3ff] bg-slate-400 rounded-full text-[8vmax]'/>
                    <div>
                        <p className='text-zinc-50 font-medium text-[2.5vmax]'>Abhijit</p>
                        <p className='text-zinc-50 font-medium text-[1.5vmax]'>abhijit@gmail.com</p>
                    </div>
                </div>
                <div className='bg-[#020411]'>
                    <p className='p-[1.3vmax] h-auto w-auto bg-[#05081bd5] rounded-md text-[1.2vmax] text-[#d4d4d4e3]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed consequatur eius sint. Eos fugit ducimus, commodi incidunt accusantium ab et neque blanditiis quo laudantium alias ullam, architecto obcaecati necessitatibus vitae nihil officiis omnis hic consequatur reiciendis voluptatibus cupiditate.
                    </p>
                </div>
             
            </div>
        
        </>
  )
}

export default Profile
