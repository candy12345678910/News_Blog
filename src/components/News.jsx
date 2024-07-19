import React, { useContext } from "react";
import { MyContext } from "../contextApi";

const News=()=>{
    const { count,headlines }=useContext(MyContext)
    // console.log(headlines.data.articles)
    
    if(headlines){
        console.log(headlines.Headline.articles)
    }
 
    return(
        <>
            <div className="flex flex-col items-center bg-red-400 h-[100vh] px-[3vmax] py-[1vmax]">
                <h1>{count}</h1>
                {
                    headlines?headlines.Headline.articles.map((i)=>JSON.stringify(i)):<></>
                }
                <p>
                    {/* {JSON.stringify(headlines)} */}
                </p>
            </div>
        </>
    )
}

export default News