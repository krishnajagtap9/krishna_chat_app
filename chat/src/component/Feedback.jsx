


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../all_Css/emailjs.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yx38dpp', 'template_r0ydndx', form.current, {
        publicKey: 'z1_WiXYa88f9YTEbv',
      })
      .then(
        () => {
          toast.success('Thanks for your feedback!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          // Send automatic reply
          emailjs.send('service_yx38dpp', 'template_34z5bgq', {
            from_email: form.current.from_email.value,
            from_name: form.current.from_name.value,
          }, 'z1_WiXYa88f9YTEbv')
          .then(() => console.log("Auto-reply sent"))
          .catch(err => console.error("Auto-reply failed:", err));

          form.current.reset(); // Reset form after submission
        },
        () => {
          toast.error('Something went wrong!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="from_name" placeholder="Enter your name" required />
        
        <label>Email</label>
        <input type="email" name="from_email" placeholder="Enter your email" required />
        
        <label>Feedback</label>
        <textarea name="message" placeholder="Write your feedback here..." required />
        
        <input type="submit"/>
      </form>
      <ToastContainer />
    </div>
  );
};
