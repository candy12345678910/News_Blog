import React, { useContext, useState } from "react";
import { MyContext } from "../contextApi";

const Search=()=>{
    const [text, setText]=useState('')
    const { search,setSearch }=useContext(MyContext)
    console.log(search)
    
    const handleSearch=()=>{
        setText(text.toLowerCase())
        if(text=='' || text==search){
            console.log("Searchbar is empty")
        }
        else{
            setSearch(text)            
        }
    }

    return(
        <>
            <div className="bg-liteBack px-[3vmax] py-[1vmax] flex  justify-center">
                <div className="flex flex-row bg-[#eeeeee] p-[.3vmax] rounded w-[50vw]">
                    <input type="text" placeholder="Search" className="bg-[#f59f0b00]  w-[100vw] text-[1vmax] outline-none" onChange={(e)=>setText(e.target.value)}/>
                    <p className="text-white text-[1.3vmax] py-[.5vmax] px-[.7vmax] rounded font-bold bg-customLiteBlue hover: cursor-pointer hover:bg-customDarkBlue transition duration-200" onClick={handleSearch}>Search</p>
                </div>
            </div>
        </>
    )
}

export default Search