import socketIO from "socket.io-client"
import "./App.css"
import Join from "./component/Join";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Chat from "./component/Chat";
import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

 export const Appstate = createContext()
function App() {
const [name ,setname] =useState("")


  return (
    <div>

<Appstate.Provider value={{name,setname }}>
   
<Routes>
<Route path="/" element={<Join/>}/> 
<Route path="/chat" element={<Chat/>}/> 


</Routes>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
</Appstate.Provider>

 
</div>
    
  );
}

export default App;


// const App = () => {
//   const handleButtonClick = () => {
//     const currentTime = new Date(); // Get the current date and time
//     const formattedTime = currentTime.toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       hour12: true, // Ensures AM/PM format
//     });
//     console.log(`Button clicked at: ${formattedTime}`);
//   };

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Click Me</button>
//     </div>
//   );
// };

// export default App;