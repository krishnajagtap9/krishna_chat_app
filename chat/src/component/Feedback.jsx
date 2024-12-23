import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import "../all_Css/Feedback.css"
import Box from '@mui/material/Box';


export const Contact = () => {
 const [name,setname]= useState("")
 const [email,setemail]= useState("")
 const [feedback,setfeedback]= useState("")
 const [hide ,sethide]= useState(false)
    const form = useRef();

   useEffect(()=>{
    if(name && email && feedback){
        sethide(true)
        }
        else{
            sethide(false)
        }
   },[name,email,feedback])
  
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm('service_yx38dpp', 'template_r0ydndx', form.current,  {
        publicKey: 'z1_WiXYa88f9YTEbv',
      })
      .then(
        () => {

return          toast.success('thanks for Feedback', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        },
        () => {
        return  toast.error('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} id='form'>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 0, width: '25ch' } } }
      noValidate
      autoComplete="off"
      id='box_feedback'
display={'flex'}
gap={"3vmax"}
flexDirection={"column"}
>
      <TextField  label="Name"   variant="standard" id="inputs"  name="from_name" placeholder='Your name' onChange={(e)=>setname(e.target.value)}/>
      <TextField  label="Email"   variant="standard" id="inputs"  name="from_email" placeholder='Please Enter your email'  onChange={(e)=>setemail(e.target.value)}/>
      <textarea id="text_field" label="Feedback"   variant="standard"  name="message"  placeholder='"Tell Us About Your  Experience " Your Feedback Matters!' onChange={(e)=>setfeedback(e.target.value)}/>
    {hide  ? (<input type="submit"  onClick={toast} value="Send" />):(<p style={{color:"red"}}>Please fill the input first</p>)}
     
    </Box>
      
    </form>
  );
};

