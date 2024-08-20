import React, { useState } from 'react'

const BlogCard=({Data})=>{
  
    const [read, setRead]=useState(0)
  
    const date=new Date(Data.createdAt)
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    // console.log(month)
    const monthShortNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    return(
      <>
        <div className='bg-[#020411] h-auto rounded-md flex flex-col overflow-hidden'>
          <div className='flex flex-row gap-1 bg-[#060a24d5]'>
            <p className='px-[1.3vmax] py-[.5vmax] h-auto w-auto text-[.9vmax] p-[.4vmax] text-zinc-50'>
              {`User: ${Data.name}`}
            </p>
            <p className='py-[.5vmax] h-auto w-auto text-[.9vmax] p-[.4vmax] text-zinc-50'>
            {`Posted on: ${monthShortNames[month]}-${day}-${year}`} 
            </p>  
          </div>
          <div className='bg-[#05081bd5] flex flex-col'>
            <p className='px-[1.3vmax] py-[.7vmax] bg-[#040516d5] h-auto w-auto text-[1.6vmax] font-semibold text-[#81c6ff]'>
              {Data.title}
            </p>
          </div>
          
          
          <p className={`px-[1.3vmax] pt-[.5vmax] ${!read ? 'h-[7vh]':'h-auto'}  w-auto bg-[#020411] text-[1.2vmax] text-[#d4d4d4e3] overflow-hidden pb-[2vh]`}>
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

  export default React.memo(BlogCard)