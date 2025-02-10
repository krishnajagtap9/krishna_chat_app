// import React, { useEffect } from 'react'
// import { useContext } from 'react'
// import { Appstate } from '../App'
// import socketio from "socket.io-client"
// import "../all_Css/chat.css"
// import { useState } from 'react'
// import Message from './Message'
// import Reactscrolltobottm from "react-scroll-to-bottom"
// import SENDIMAGE from "../images/images5.png"
// import ActiveStaus from "../component/ActiveDrawer.jsx"

// const ENDPOINT ="http://localhost:9000/"
// let socket

// const Chat = () => {
// const Appdata = useContext(Appstate)
// const [MessageSend,setMessageSend] =useState("")
// const [id, setid]= useState("")
// const [nomessage, setnomessage]= useState([])



// const Send =()=>{
//   const currentTime = new Date(); 
//     const formattedTime = currentTime.toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       hour12: true, // Ensures AM/PM format
//     });
//   console.log(MessageSend)
//   socket.emit("message",{MessageSend,id,formattedTime})
// setMessageSend("")
// }

// useEffect(()=>{
//  socket = socketio(ENDPOINT ,{transports:["websocket"]})


//   socket.on("connect",()=>{
//     alert("connected yess")
// setid(socket.id)

//   })
// socket.emit("joined",{Appdatanew:Appdata.name})
// socket.on("Welcome" ,(data)=>{
//   setnomessage([...nomessage,data])
//   console.log(data.user,data.message)
// })

// socket.on("userjoined" ,(data)=>{
//   setnomessage([...nomessage,data])

//   console.log(data.user,data.message)
// })


// return ()=>{
  
// socket.emit("disconnected")
// socket.off();
  
// }
// },[])

// const handleKeyDown = (event) => {
//   if (event.key === "Enter") {
    
//     Send();
//   }
// };

// useEffect(()=>{
// socket.on("Sendmessage",(data)=>{
//   setnomessage([...nomessage,data])

//   console.log(data)
//   console.log(data.user,data.MessageSend,data.id,data.formattedTime)
//   console.log(nomessage)
// })


// return ()=>{
//   socket.off()
// }
// },[nomessage])



//   return (
//     // <div>
//     // <h1>{Appdata.name}</h1>
//     // <h1>afdasdf</h1>
//     // </div>
//     <div className="chatpage">

// <div className="chatcontainer">
//   <div className="header">
// <p className='groupname'>Group Chat <span  >Developer <span>(Krishna Kumar Jagtap)</span></span></p>
//   <div className="icon_box">
//   <ActiveStaus/>
//   </div>
//   </div>
//   <Reactscrolltobottm className="chatbox">
// {nomessage.map((item ,i)=>{
//  return <Message  message={item.MessageSend} users={item.id===id?"":item.user} classs={item.id===id? "right":"left"} time={item.formattedTime}/>

// })}

//   </Reactscrolltobottm>
//   <div className="inputbox">
// <input  onKeyDown={handleKeyDown} type="text"   id='chatinput' value={MessageSend}  onChange={(e)=>setMessageSend(e.target.value)} placeholder='Type a message' />
// <button id='sendbtn' onClick={Send}><img id='send_logo' src={SENDIMAGE} alt="" /></button>
//   </div>
 
// </div>

//     </div>
//   )
// }

// export default Chat





// new render uploaded  code  

import React, { useEffect, useState, useContext } from "react";
import { Appstate } from "../App";
import socketio from "socket.io-client";
import "../all_Css/chat.css";
import Message from "./Message";
import Reactscrolltobottm from "react-scroll-to-bottom";
import SENDIMAGE from "../images/images5.png";
import ActiveStaus from "../component/ActiveDrawer.jsx";

const ENDPOINT = "https://krishna-chat-app-etw8.onrender.com/";
let socket;

const Chat = () => {
  const Appdata = useContext(Appstate);
  const [MessageSend, setMessageSend] = useState("");
  const [id, setid] = useState("");
  const [nomessage, setnomessage] = useState([]);

  const Send = () => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Ensures AM/PM format
    });

    console.log(MessageSend);
    socket.emit("message", { MessageSend, id, formattedTime });
    setMessageSend("");
  };

  useEffect(() => {
    socket = socketio(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      alert("Connected successfully!");
      setid(socket.id);
    });

    socket.emit("joined", { Appdatanew: Appdata.name });

    socket.on("Welcome", (data) => {
      setnomessage((prev) => [...prev, data]);
      console.log(data.user, data.message);
    });

    socket.on("userjoined", (data) => {
      setnomessage((prev) => [...prev, data]);
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit("disconnected");
      socket.off();
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      Send();
    }
  };

  useEffect(() => {
    socket.on("Sendmessage", (data) => {
      setnomessage((prev) => [...prev, data]);

      console.log(data);
      console.log(data.user, data.MessageSend, data.id, data.formattedTime);
    });

    return () => {
      socket.off();
    };
  }, [nomessage]);

  return (
    <div className="chatpage">
      <div className="chatcontainer">
        <div className="header">
          <p className="groupname">
            Group Chat <span>Developer <span>(Krishna Kumar Jagtap)</span></span>
          </p>
          <div className="icon_box">
            <ActiveStaus />
          </div>
        </div>
        <Reactscrolltobottm className="chatbox">
          {nomessage.map((item, i) => (
            <Message
              key={i}
              message={item.MessageSend}
              users={item.id === id ? "" : item.user}
              classs={item.id === id ? "right" : "left"}
              time={item.formattedTime}
            />
          ))}
        </Reactscrolltobottm>
        <div className="inputbox">
          <input
            onKeyDown={handleKeyDown}
            type="text"
            id="chatinput"
            value={MessageSend}
            onChange={(e) => setMessageSend(e.target.value)}
            placeholder="Type a message"
          />
          <button id="sendbtn" onClick={Send}>
            <img id="send_logo" src={SENDIMAGE} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
