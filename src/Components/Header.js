import React, { useState } from "react";

import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import {  AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import "../Css/Header.css";
import { NavLink} from "react-router-dom"



function Header() {
  const [value, setValue] = useState();

  return (
    <div className="header-top">
      <AppBar  sx={{bgcolor:"black",color:"white" }}>
       
        <Toolbar>
        <NavLink to="/"  >
          <h4 className="library" style={{color:"white", fontSize:"1rem",height:"2rem"}}>
            <LibraryBooksOutlinedIcon />
          </h4>
          </NavLink>
          {/* here we need dynamic value when we tap the Tab it indicate the color so use useState */}
          <div className="tabcontroll">
           <Tabs 
           color="white"
           className="tab"
           textColor="white"
           indicatorColor="secondary" 
           value={value}
           onChange={(e,val)=>setValue(val)}  //val is store the value of the tab declare
           >
          
            <Tab  className="tab-child" LinkComponent={NavLink} to="/" label="Home" />
            <Tab className="tab-child" LinkComponent={NavLink} to="/about" label="About" />
            <Tab className="tab-child" LinkComponent={NavLink} to="/add" label="AddBooks" />
            <Tab className="tab-child" LinkComponent={NavLink} to="/get" label="Books" />
            
           
      
          </Tabs>
          </div>
        </Toolbar>
      </AppBar>
      </div>
  );
}

export default Header;








