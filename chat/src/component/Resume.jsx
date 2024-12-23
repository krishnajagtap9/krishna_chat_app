import React from "react";
import "../all_Css/Resume.css"
import Image from "../images/krishna2.jpg" 

const Resume = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center",fontSize:"2.5vmax" }}>Mr. Krishna Jagtap</h1>
      <p style={{ textAlign: "center" }}>
        <strong>Frontend & Backend Developer</strong>
      </p>
      <p style={{ textAlign: "center" }}>
        <a href="mailto:jagtapkanaha987@gmail.com">jagtapkanaha987@gmail.com</a> |{" "}
        <a href="https://www.linkedin.com/in/krishna-jagtap-074964262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          LinkedIn
        </a>{" "}
        | <a href="https://github.com/krishnajagtap9">GitHub</a> | 7440780233
      </p>
      <hr />

      <div className="profile_section">
        
        <div className="box1">
<img src={Image} alt="" id="profile" />

        </div>
        <div className="box2">
    
          <p  style={{marginLeft:"-10px"}} ><b>Name:</b ><span>Mr krishna kumar jagtap</span></p>
          <p ><b id="Profession">Profession:</b><span>Android & Ios,<span>full stack developer</span></span> </p>
          <p  style={{marginLeft:"-30px"}}><b>College:</b><span>Ips Academy,Indore</span> </p>
        </div>
      </div>
      <h2>Summary</h2>
      <ul>
        <li>Proficient full-stack developer with expertise in building dynamic, scalable web applications.</li>
        <li>Skilled in React, Node.js, Express, and SQL.</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>
          <strong>Frontend:</strong> React.js, HTML, CSS, JavaScript
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express.js
        </li>
        <li>
          <strong>Database:</strong> MySQL, SQL
        </li>
        <li>
          <strong>Tools & Platforms:</strong> VS Code, Git
        </li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Authentication System:</strong> Built a secure sign-in/sign-up platform using React, Express, and SQL.
        </li>
        <li>
          <strong>Sanitation Reporting System:</strong> Developed a website enabling users to report sanitation issues for municipal action.
        </li>
        <li>
          <strong>MERN Stack Applications:</strong> Delivered multiple projects leveraging MongoDB, Express, React, and Node.js.
        </li>
      </ul>

      <h2>Education</h2>
      <p>
        <strong>Degree:</strong> IPS Academy Institute of Engineering and Science, Indore
        <br />
        <strong>Year of Graduation:</strong> 2026
      </p>
    </div>
  );
};

export default Resume;