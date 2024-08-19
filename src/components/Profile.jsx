import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LuUserCircle2 } from "react-icons/lu";
import { BiSolidErrorAlt } from "react-icons/bi";
import axios from "axios"
import Loader from './Loader'

function Profile() {
    const navigate=useNavigate()
    const [name, setName]=useState(null)
    const [email, setEmail]=useState(null)
    const [post, setPost]=useState(null)
    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const [error, setError]=useState(0)
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const data=await axios.get(import.meta.env.VITE_BACKEND_DATABASE+'/profile',{withCredentials: true})
                // console.log(data)
                if(data.status==201){
                    navigate("/login")
                }

                const { email, name, post }=data.data
                setName(name)
                setEmail(email)
                setPost(post)
            }
            catch(err){
                console.log("Error occured while fetching from profile: "+err)
                setError(1)
            }
        }
        fetchData()
    },[])
    const handleClearPost=()=>{
        setTitle('')
        setContent('')
    }
    const handlePost=async()=>{
        await axios.post(import.meta.env.VITE_BACKEND_POST_DATABASE+'/create',{
            email,
            title,
            content
        },{withCredentials: true})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    if(error){
        return(
            <>
                <div className='flex flex-col bg-liteBack h-[100vh] gap-6 justify-center items-center p-[3max] '>
                    <BiSolidErrorAlt className='text-zinc-50 text-[20vmin]'/>
                    <p className='text-zinc-50 text-[1.6vmax] font-semibold'>Something went wrong</p>
                </div>
            </> 
        )    
    }
    if(!email){
        return <Loader/>
    }
    return (    
        <>
            <div className='bg-[#111725] min-h-screen p-[3vmax] flex flex-col gap-4'>
                <div className='flex flex-row gap-5 items-center'>
                    <LuUserCircle2 className='p-[1.3max] text-[#eaf3ff] bg-slate-400 rounded-full text-[8vmax]'/>
                    <div>
                        <p className='text-zinc-50 font-medium text-[2.5vmax]'>{name}</p>
                        <p className='text-zinc-50 font-medium text-[1.5vmax]'>{email}</p>
                    </div>
                </div>
                <br/>
                <p className='text-zinc-50 font-medium text-[2vmax]'>Create a new post</p>
                
                <div className='flex flex-col justify-center items-start gap-2'>
                    <input className='bg-[#020411] p-[1vmax] rounded-md w-full text-zinc-50 text-[1.3vmax] outline-none' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                
                    <textarea className='bg-[#020411] h-[30vh] text-[1.3vmax] text-zinc-50 rounded-md p-[1vmax] outline-none border-red-100 w-full' placeholder='Write your blog' value={content} onChange={(e)=>setContent(e.target.value)}/>
                    <div className='flex flex-row gap-3'>
                        <button className='text-zinc-50 rounded-md px-[1.6vmax] py-[.6vmax] text-[1.5vmax] m-auto mb-6 bg-[#ce284c] hover:bg-[#a72843] hover:text-[#fcbbdb]' onClick={handleClearPost}>Clear</button>

                        <button className='text-zinc-50 rounded-md px-[1.6vmax] py-[.6vmax] text-[1.5vmax] m-auto mb-6 bg-[#3e68f3] hover:bg-[#1c3074] hover:text-[#9daedb]' onClick={handlePost}>Create Post</button>
                    </div>
                </div>

                <hr/>
                <p className='text-zinc-50 font-medium text-[2vmax] mx-auto pb-[1vmax]'>Your Posts</p>
                {
                    !post.length?<p className='text-zinc-50 text-[1.2vmax] mx-auto'>No post yet</p>:
                    <PostCard/>
                }
            </div>
        
        </>
  )
}

export const PostCard=()=>{
    return(
        <>
            <div className='bg-[#020411] rounded-md flex flex-col'>
                <p className='px-[1.3vmax] h-auto w-auto bg-[#05081bd5] rounded-md text-[1.6vmax] text-zinc-50'>Lorem Ipsum🤑</p>
                <p className='p-[1.3vmax] h-auto w-auto bg-[#05081bd5] rounded-md text-[1.2vmax] text-[#d4d4d4e3]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed consequatur eius sint. Eos fugit ducimus, commodi incidunt accusantium ab et neque blanditiis quo laudantium alias ullam, architecto obcaecati necessitatibus vitae nihil officiis omnis hic consequatur reiciendis voluptatibus cupiditate.
                </p>    
                <button className='text-zinc-50 px-[1.6vmax] text-[1.3vmax] mb-6 m-auto'>Delete post</button>
            </div>
        </>
    )
}

export default Profile
