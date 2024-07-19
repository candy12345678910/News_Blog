import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import News from "./components/News";

const App=()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<News />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;