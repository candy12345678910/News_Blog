import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Footer from "./components/Footer";
import News from "./components/News";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchPage from "./components/SearchPage";
import Profile from "./components/Profile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App=()=>{

  return(
    <>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<News />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/search/:id" element={<SearchPage />} />
          <Route path="/profile" element={ <Profile /> }/>
        </Route>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/register" element={ <Register /> }/>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App;