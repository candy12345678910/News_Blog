import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Footer from "./components/Footer";
import News from "./components/News";
import SearchPage from "./components/SearchPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App=()=>{

  return(
    <>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<News />}/>
          <Route path="/search/:id" element={<SearchPage />} />
        </Route>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App;