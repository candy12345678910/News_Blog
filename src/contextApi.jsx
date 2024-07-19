import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
import Headline from "./components/Headline"

export const MyContext=createContext()

export const ContextPorovider=({ children })=>{

    const [headlines, setHeadline]=useState(null)
    const [search, setSearch]=useState('')
    const [count,setCount]=useState(0)

    useEffect(()=>{
        
        const newHeadlines=async ()=>{
            try{
                const data=await axios(import.meta.env.VITE_HEADLINES+import.meta.env.VITE_APIKEY)
                // setHeadline(data)
                if(data){
                    setHeadline(data)
                }
            }
            catch(err){
                console.log(import.meta.env.VITE_LINK)
            }
            setCount(count+1)
        }
        
        setHeadline({Headline})
        // newHeadlines()
    },[])

    return(
        <MyContext.Provider value={{ count, headlines,search,setSearch }}>
            { children }
        </MyContext.Provider>
    )

}