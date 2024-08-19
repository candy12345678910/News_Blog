import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from './Loader'
import { BiSolidErrorAlt } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import { RiBloggerFill } from "react-icons/ri";
import { TbMoodEmpty } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Blog() {

  const [data, setData]=useState(null)

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const data=await axios.get(import.meta.env.VITE_BACKEND_POST_DATABASE+"/allpost")
        setData(data.data)
        // console.log(data.data)
      }
      catch(err){
        console.log(err)
        return(
          <>
              <div className='flex flex-col bg-liteBack h-[100vh] gap-6 justify-center items-center p-[3max] '>
                  <BiSolidErrorAlt className='text-zinc-50 text-[20vmin]'/>
                  <p className='text-zinc-50 text-[1.6vmax] font-semibold'>Error occured</p>
                  <button className='p-[1vmax] rounded-md text-[1.1vmax] font-medium text-[white] bg-[#0EA5E9] hover:text-[1.3vmax] ease-in duration-300' onClick={()=>navigate("/")}>Back to home</button>
              </div>
          </>
        )
      }
    }
    fetchData()
  },[])

  if(!data){
    return(
      <Loader />
    )
  }

  if(!data.length){
    return(
      <>
        <div className='flex flex-col bg-liteBack h-screen gap-6 justify-center items-center'>
          <TbMoodEmpty className='text-zinc-50 text-[20vmin]'/>
          <p className='text-zinc-50 text-[1.6vmax] font-semibold'>Oops! Looks like no one has posted yet</p>
          {/* <button className='p-[1vmax] rounded-md text-[1.1vmax] font-medium text-[white] bg-[#0EA5E9] hover:text-[1.3vmax] ease-in duration-300' onClick={()=>navigate("/")}>Back to home</button> */}
        </div>
      </>
    )
  }

  return (
    <>
    <div className="bg-[#111725] min-h-screen flex flex-col gap-4 justify-start px-[3vmax] py-[2vmax]">
      <p className="text-zinc-50 font-medium text-[2vmax] mx-auto pb-[1vmax]">Latest Posts</p>
      {
        data.reverse().map((i) => <BlogCard key={i._id} Data={i} />)
      }
    </div>
  </>
  
  ) 
}

export const BlogCard=({Data})=>{
  
  const [read, setRead]=useState(0)

  const date=new Date(Data.createdAt)
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthShortNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
  
  return(
    <>
      <div className='bg-[#020411] h-auto rounded-md flex flex-col overflow-hidden'>
        <div className='flex flex-row gap-1 bg-[#0c123ad5]'>
          <p className='px-[1.3vmax] py-[.5vmax] h-auto w-auto text-[.9vmax] p-[.4vmax] text-zinc-50'>
            {`User: ${Data.name}`}
          </p>
          <p className='py-[.5vmax] h-auto w-auto text-[.9vmax] p-[.4vmax] text-zinc-50'>
          {`Posted on: ${monthShortNames[month]} ${day} ${year}`} 
          </p>  
        </div>
        <div className='bg-[#05081bd5] flex flex-col'>
          <p className='px-[1.3vmax] py-[1.5vmax] h-auto w-auto text-[1.6vmax] font-bold text-zinc-50'>
            {Data.title}
          </p>
        </div>
        
        
        <p className={`px-[1.3vmax] ${!read ? 'h-[7vh]':'h-auto'}  w-auto bg-[#0c113091] text-[1.2vmax] text-[#d4d4d4e3] overflow-hidden pb-[2vh]`}>
          {Data.content}
        </p>
        <button
          className=' bottom-0 left-0 right-0 text-zinc-50 px-[1.6vmax] py-[1.3vh] text-[1.3vmax] bg-gradient-to-b from-[#162552c7] to-[#020722]'
          onClick={() => setRead(!read)}
        >
          {(!read) ? <p className='flex flex-row justify-center items-center'>read more</p>
          :<p className='flex flex-row justify-center items-center'>read less</p>}
        </button>
      </div>
</>

  )
}

export default Blog
