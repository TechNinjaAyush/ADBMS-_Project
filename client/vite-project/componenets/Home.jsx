import React from "react";
import Header from "./Header";
import MainBody from "./mainBody";
import Sidebar from "./Sidebar";
import '../styles/Home.css' ; 
const Home = ()=>{
    return(
        <>
          <Header />
      <div className="container">
        <Sidebar />
        <MainBody />
      </div>
        
        </>
    )


}

export default Home ; 
