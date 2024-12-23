import React, { useState, useContext } from 'react';
import "../all_Css/join.css";
import image from "../images/whatapplogo.png";
import { Link } from 'react-router-dom';
import { Appstate } from '../App';
import NestedModal from './AboutDEV';
import TextField from '@mui/material/TextField';



const Join = () => {
  const { name, setname } = useContext(Appstate); // Context for `name`
  const [disable, setDisable] = useState(true); // State to manage button disabling
  const [error, seterror] = useState(false); // State to manage button disabling

  // Handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setname(value);
    setDisable(!value); 
  };


  const linkhandling = (event) => {
    if (!name) {
      event.preventDefault();
    seterror(true)
    }
  };

  return (
    <div className="join_page">
        <div className="header_login"></div>

      <div className="joincontainer">
        <img src={image} alt="Chat Logo" />
        <h1>Whatsapp </h1>
       
   <TextField  label="Name"   variant="standard" id="joininput"   placeholder="Enter your name" onChange={handleInputChange}/>
        
        <Link to="/chat" onClick={linkhandling}>
          <button className="joinbtn" disabled={disable}>
           START NOW
          </button>
        </Link>
        <div className="nextbutn">
        
        <NestedModal/>
      </div>
      {!name ? (
          <p style={{ color: 'red' }}>Please enter your name first.</p>
        ) : (
          name && <p>Welcome, {name}!</p>
        )}
      </div>
      
    </div>
  );
};

export default Join;
