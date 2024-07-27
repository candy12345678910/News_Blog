import React from 'react'
import Loader from './Loader'

function Profile() {
    return (
        <>
            <div className='bg-[#111725] h-[100vh] flex flex-col gap-3 justify-center items-center'>

                <div className='w-[50vw] h-auto bg-[#0b0c118a] p-[3vmax] rounded-[3vm] flex flex-col gap-5 justify-center items-center'>
                    <p className='text-[2.3vmax] font-medium text-[white]'>Login</p>

                    <form method='post' className="w-full" action="#">

                        <div className='flex flex-row gap-2'>
                            <input className='w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type="text" placeholder='Email' name="email"/>
                        </div>

                        <div className='flex flex-row justify-between'>
                            {/* <label for="email" className='text-[#d1d1d1] text-[1.3vmax] font-medium'>Password:</label> */}
                            <input className='w-full bg-transparent border-2 border-zinc-800 rounded-md outline-none text-zinc-50 text-[1.3vmax]' type={hide?"password":"text"} placeholder='Password' name="password"/>
                        </div>
                        
                    </form>

                    <button className='w-full text-[#ffffff] text-[1.3vmax] font-medium px-[1.1vmax] py-[.5vmax] bg-customLiteBlue rounded-md'>Login</button>
                </div>

            </div>
        
        </>
  )
}

export default Profile
