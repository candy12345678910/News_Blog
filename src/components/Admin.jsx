import React,{ useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FaUser } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaUserAltSlash } from "react-icons/fa";


const Admin=()=>{

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    return (
        <>
            <Toaster
            position="top-center"
            reverseOrder={false}
        />
            <div className='bg-[#080e25] min-h-screen flex flex-col gap-3 justify-start items-center pb-14'>
                {/* Simple nav */}
                <div className='flex- flex-row justify-between items-center p-[1.5vmax] bg-[#101746] w-full'>
                    <p className='text-zinc-50 text-[1.5vmax] font-semibold'>Hello Admin</p>
                    <p></p>
                </div>

                {/* user, post, deleted user, seleted post cards */}
                <div className='flex flex-wrap md:flex-row gap-5 justify-center items-center p-[1.3vmax]'>
                    
                    <div className='bg-[#263663] w-[30vw] md:w-[15vw] rounded-md flex flex-row justify-start items-center gap-3 p-[.6vmax]'>
                    
                        <div className='h-8 w-8 md:h-14 md:w-14 bg-[#15488a] flex items-center justify-center rounded-full'>
                            <FaUser className='text-[#34f089] text-1 md:text-[2vw]'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-zinc-50 font-semibold text-[1.4vmax]'>Post</p>
                            <p className='text-[#badaff] font-semibold text-[1.2vmax]'>2000</p>
                        </div>
                    </div>

                    <div className='bg-[#263663] w-[30vw] md:w-[15vw] rounded-md flex flex-row justify-start items-center gap-3 p-[.6vmax]'>
                        <div className='h-8 w-8 md:h-14 md:w-14 bg-[#15488a] flex items-center justify-center rounded-full'>
                            <FaBloggerB className='text-[#f0ae34] text-1 md:text-[2vw]'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-zinc-50 font-semibold text-[1.4vmax]'>Post</p>
                            <p className='text-[#badaff] font-semibold text-[1.2vmax]'>2000</p>
                        </div>
                    </div>

                    <div className='bg-[#263663] w-[30vw] md:w-[15vw] rounded-md flex flex-row justify-start items-center gap-3 p-[.6vmax]'>
                        <div className='h-8 w-8 md:h-14 md:w-14 bg-[#15488a] flex items-center justify-center rounded-full object-cover'>
                            <FaUserAltSlash className='text-[#f03434] text-1 md:text-[2vw]'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-zinc-50 font-semibold text-[1.4vmax]'>Deleted User</p>
                            <p className='text-[#badaff] font-semibold text-[1.2vmax]'>2000</p>
                        </div>
                    </div>

                    <div className='bg-[#263663] w-[30vw] md:w-[15vw] rounded-md flex flex-row justify-start items-center gap-3 p-[.6vmax]'>
                        <div className='h-8 w-8 md:h-14 md:w-14 bg-[#15488a] flex items-center justify-center rounded-full object-cover'>
                            <MdDelete className='text-[#f03434] text-1 md:text-[2vw]'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-zinc-50 font-semibold text-[1.4vmax]'>Deleted Post</p>
                            <p className='text-[#badaff] font-semibold text-[1.2vmax]'>2000</p>
                        </div>
                    </div>

                </div>
                
                <div className='flex flex-row'/>
                    <button className='p-[1vmax] bg-[#263663] rounded-md text-[white] font-semibold '>User</button>

                <div>

                </div>

                {/* Add admin */}
                <div className='flex flex-col w-[70vw] py-[.6vmax]'>
                    <p className='text-[#b6d2ff] font-medium m-auto text-[1.3vmax] py-[1.3vmax]'>Add Admin</p>
                    <div className='flex flex-row md:flex-row gap-2 p-[1.3vmax] rounded-md bg-[#1d2644]'>
                        <input className='p-[.3vmax] w-full bg-[#101838] border-2 border-[#8494c0] rounded-md outline-none text-zinc-50 text-[1.3vmax]' type="text" placeholder='Email' name="email" onChange={(e)=>setEmail(e.target.value)}/>

                        <input className='p-[.3vmax] w-full bg-[#101838] border-2 border-[#8494c0] rounded-md outline-none text-zinc-50 text-[1.3vmax]' type="text" placeholder='Password' name="email" onChange={(e)=>setPassword(e.target.value)}/>
                        <button className='text-zinc-50 p-[.5vmax] font-medium rounded-md text-[1.3vmax] bg-[#248f54] hover:bg-[#1e7746]'>Add</button>
                    </div>                    
                </div>

                <div className='flex flex-col gap-3 w-[70vw] h-auto rounded-md bg-[#879bcc4f] py-[1.6vmax] px-[1vmax] overflow-hidden'>
                    <AdminCard/>
                    <AdminCard/>
                </div>


            </div>
        </>
    )
}

export const AdminCard=()=>{
    return(
        <>
            <div className='flex flex-row items-center justify-between pl-[1vmax] rounded-md bg-[#09112e] overflow-hidden'>
                <p className='text-[#d5e9ff] text-[1.2vmax]'>abhijit@gmail.com</p>
                <p className='text-[#d5e9ff] text-[1.2vmax]'>sdasgdahdh</p>
                <button className='text-zinc-50 p-[.4vmax] font-medium  text-[1.3vmax] bg-logoutLite hover:bg-logoutDark'>Delete</button>
            </div>
        </>
    )
}
export default Admin
