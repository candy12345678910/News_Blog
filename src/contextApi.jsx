import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
import Headline from "./components/Headline"

export const MyContext=createContext()

export const ContextPorovider=({ children })=>{

    const [search, setSearch]=useState('')
    const colour=["#f56042","#3e82f7","#3e57f7","#f7973e"]
    
    const [headlines, setHeadline]=useState(null)
    const [general,setGeneral]=useState(null)
    const [buisness,setBuisness]=useState(null)
    const [sports, setSports]=useState(null)
    const [entertainment, setEntertainment]=useState(null)
    const [health, setHealth]=useState(null)
    const [science, setScience]=useState(null)
    const [technology, setTechnology]=useState(null)

    const fetchAll=()=>{
        const headlines=import.meta.env.VITE_HEADLINES+import.meta.env.VITE_APIKEY
        const generalAPI=import.meta.env.VITE_LINK_BUISNESS+"general&apiKey="+import.meta.env.VITE_APIKEY
        const buisnessAPI=import.meta.env.VITE_LINK_BUISNESS+"buisness&apiKey="+import.meta.env.VITE_APIKEY
        const sportsAPI=import.meta.env.VITE_LINK_BUISNESS+"sports&apiKey="+import.meta.env.VITE_APIKEY
        const entertainmentAPI=import.meta.env.VITE_LINK_BUISNESS+"entertainment&apiKey="+import.meta.env.VITE_APIKEY
        const healthAPI=import.meta.env.VITE_LINK_BUISNESS+"health&apiKey="+import.meta.env.VITE_APIKEY
        const scienceAPI=import.meta.env.VITE_LINK_BUISNESS+"science&apiKey="+import.meta.env.VITE_APIKEY
        const technologyAPI=import.meta.env.VITE_LINK_BUISNESS+"technology&apiKey="+import.meta.env.VITE_APIKEY

        const zero=axios.get(headlines)
        const one=axios.get(generalAPI)
        const two=axios.get(buisnessAPI)
        const three=axios.get(sportsAPI)
        const four=axios.get(entertainmentAPI)
        const five=axios.get(healthAPI)
        const six=axios.get(scienceAPI)
        const seven=axios.get(technologyAPI)
        
        
        axios.all([zero, one, two, three, four, five, six, seven]).then(
            axios.spread((...data)=>{
                const zero =data[0].data.articles
                const one=data[1].data.articles
                const two=data[2].data.articles
                const three=data[3].data.articles
                const four=data[4].data.articles
                const five=data[5].data.articles
                const six=data[6].data.articles
                const seven=data[7].data.articles
                
                setHeadline(zero)
                setGeneral([ "General", one])
                setBuisness([ "Buisness", two])
                setSports([ "Sports", three])
                setEntertainment([ "Entertainment", four])
                setHealth([ "Health", five])
                setScience([ "Science", six])
                setTechnology([ "Technology", seven])
            })
        ).catch(err=>console.log("Error occured= "+err))

    }

    // const fetchAll=async ()=>{
    //     const headlines=import.meta.env.VITE_HEADLINES+import.meta.env.VITE_APIKEY
    //     const generalAPI=import.meta.env.VITE_LINK_BUISNESS+"general&apiKey="+import.meta.env.VITE_APIKEY
    //     const buisnessAPI=import.meta.env.VITE_LINK_BUISNESS+"buisness&apiKey="+import.meta.env.VITE_APIKEY
    //     const sportsAPI=import.meta.env.VITE_LINK_BUISNESS+"sports&apiKey="+import.meta.env.VITE_APIKEY
    //     const entertainmentAPI=import.meta.env.VITE_LINK_BUISNESS+"entertainment&apiKey="+import.meta.env.VITE_APIKEY
    //     const healthAPI=import.meta.env.VITE_LINK_BUISNESS+"health&apiKey="+import.meta.env.VITE_APIKEY
    //     const scienceAPI=import.meta.env.VITE_LINK_BUISNESS+"science&apiKey="+import.meta.env.VITE_APIKEY
    //     const technologyAPI=import.meta.env.VITE_LINK_BUISNESS+"technology&apiKey="+import.meta.env.VITE_APIKEY

    //     try{
    //         const zero=await axios.get(headlines)
    //         const one=await axios.get(generalAPI)
    //         const two=await axios.get(buisnessAPI)
    //         const three=await axios.get(sportsAPI)
    //         const four=await axios.get(entertainmentAPI)
    //         const five=await axios.get(healthAPI)
    //         const six=await axios.get(scienceAPI)
    //         const seven=await axios.get(technologyAPI)
            

    //         console.log(zero)
    //         setHeadline(zero.data.articles)
    //         setGeneral([ "General", one.data.articles])
    //         setBuisness([ "Buisness", two.data.articles])
    //         setSports([ "Sports", three.data.articles])
    //         setEntertainment([ "Entertainment", four.data.articles])
    //         setHealth([ "Health", five.data.articles])
    //         setScience([ "Science", six.data.articles])
    //         setTechnology([ "Technology", seven.data.articles])
        
    //     }catch(err){
    //         console.log("Error: ",err)
    //     }
                
    // }
    useEffect(()=>{
        fetchAll()
        // setHeadline(Headline.articles)
    },[])

    return(
        <MyContext.Provider value={{ headlines, search, setSearch, colour, general, buisness, sports, entertainment, health, science, technology }}>
            { children }
        </MyContext.Provider>
    )

}