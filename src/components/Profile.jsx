import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { LuUserCircle2 } from "react-icons/lu";
import axios from "axios"
import Loader from './Loader'

function Profile() {
    const navigate=useNavigate()
    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const token = Cookies.get('newsToken');
    if(token){
        
    }
    else{
        navigate("/login")
    }

    return (    
        <>
            <div className='bg-[#111725] h-[auto] p-[3vmax] flex flex-col gap-4'>
                <div className='flex flex-row gap-5 items-center'>
                    <LuUserCircle2 className='p-[1.3max] text-[#eaf3ff] bg-slate-400 rounded-full text-[8vmax]'/>
                    <div>
                        <p className='text-zinc-50 font-medium text-[2.5vmax]'>Abhijit</p>
                        <p className='text-zinc-50 font-medium text-[1.5vmax]'>abhijit@gmail.com</p>
                    </div>
                </div>
                <br/>
                <p className='text-zinc-50 font-medium text-[2vmax]'>Create a new post</p>
                
                <div className='flex flex-col justify-center items-start gap-2'>
                    <input className='bg-[#020411] p-[1vmax] rounded-md w-full text-zinc-50 text-[1.3vmax] outline-none' placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
                
                    <textarea className='bg-[#020411] h-[30vh] text-[1.3vmax] text-zinc-50 rounded-md p-[1vmax] outline-none border-red-100 w-full' placeholder='Write your blog' onChange={(e)=>setContent(e.target.value)}/>
                
                    <button className='text-zinc-50 rounded-md px-[1.6vmax] py-[.6vmax] text-[1.5vmax] m-auto mb-6 bg-[#3e68f3] hover:bg-[#1c3074] hover:text-[#9daedb]'>Post</button>
                </div>

                <hr/>
                <p className='text-zinc-50 font-medium text-[2vmax] mx-auto'>Previous Posts</p>
                <div className='bg-[#020411] rounded-md flex flex-col'>
                    <p className='px-[1.3vmax] py-[1.1vmax] h-auto w-auto bg-[#05081bd5] rounded-md text-[1vmax] text-[#c9c9c9]'>author: Abhijit@gmailcom</p>
                    <p className='px-[1.3vmax] h-auto w-auto bg-[#05081bd5] rounded-md text-[1.6vmax] text-zinc-50'>Lorem Ipsum🤑</p>
                    <p className='p-[1.3vmax] h-auto w-auto bg-[#05081bd5] rounded-md text-[1.2vmax] text-[#d4d4d4e3]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed consequatur eius sint. Eos fugit ducimus, commodi incidunt accusantium ab et neque blanditiis quo laudantium alias ullam, architecto obcaecati necessitatibus vitae nihil officiis omnis hic consequatur reiciendis voluptatibus cupiditate.
                    </p>
                    
                    <button className='text-zinc-50 px-[1.6vmax] text-[1.3vmax] mb-6 m-auto'>Delete post</button>
                </div>
             
            </div>
        
        </>
  )
}

export default Profile
