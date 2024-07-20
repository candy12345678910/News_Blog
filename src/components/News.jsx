import React, { useContext, useEffect, useState } from "react";
import HeadlineCard from "./HeadlineCard";
import OtherNews from "./OtherNews";
import { MyContext } from "../contextApi";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const News=()=>{
    // const colour=["customCardRed","customCardGreen","customCardBlue","customCardViolet","customCardYellow","customCardOrange"]
    const colour=["#f56042","#3e82f7","#3e57f7","#f7973e"]
    const { count,headlines }=useContext(MyContext)

    const [shift, setshift]=useState(0)
    const [end, setEnd]=useState(0)
    // console.log(headlines.data.articles)
    useEffect(()=>{
        if(headlines){
            setEnd(headlines.Headline.articles.length)
            console.log(headlines.Headline.articles.length)
        }
    },[headlines])

    if(headlines){
        // setNews(headlines.Headline.articles)
        // console.log(headlines.Headline.articles)
        // console.log(headlines.Headline.articles.length)
    }
    // setInterval(()=>{
    //     setshift((shift+1)%end)
    // },4000)
    const goLeft=()=>{
        if(shift==0){
            setshift(end-1)
        }
        else{
            setshift((shift-1)%end)
        }
    }

    const goRight=()=>{
        setshift((shift+1)%end)
    }
 
    return(
        <>
            <div className="flex flex-col items-center bg-[#c4cde4] h-[auto] py-[1vmax]">
            
                <div className="relative">
                    <div className="relative">
                        {
                            headlines ? <HeadlineCard data={ headlines.Headline.articles[shift] } colour={colour} /> : <p>Loading</p>
                        }
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex flex-row items-center justify-between h-full">
                            <IoIosArrowBack className="bg-[#00000054] text-[#d3d3d3] text-[4vmax] hover:cursor-pointer p-[5] sm:bg-[#000000e1] rounded" onClick={goLeft}/>
                            <IoIosArrowForward className="bg-[#00000054] text-[#d3d3d3] text-[4vmax] hover:cursor-pointer p-[5] sm:bg-[#000000e1] rounded" onClick={goRight}/>
                        </div>
                    </div>
                </div>

                <OtherNews/>                

            </div>
        </>
    )
}

export default News