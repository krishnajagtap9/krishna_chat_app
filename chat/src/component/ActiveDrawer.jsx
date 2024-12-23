import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import socketio from "socket.io-client"
import { useState ,useEffect} from 'react';
import { data } from 'react-router-dom';


const ENDPOINT ="https://krishna-chat-app-dadb-9qz5232xz-krishna-jagtaps-projects.vercel.app/"
let socket


const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '50%',
  width:"50%",
  ...theme.applyStyles('dark', {
  }),
}));

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[800],
  }),
}));

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[900],
  }),
}));

function SwipeableEdgeDrawer(props) {

  socket = socketio(ENDPOINT ,{transports:["websocket"]})
const [state,setstate]= useState([])
const [leftperson,setleftperson]= useState("za1z")
let previousState = JSON.parse(localStorage.getItem('users')) || [];


  socket.on("userjoined" ,(data)=>{
    setstate([...state,data])
 
  

    console.log(data.user,data.message,"mai chal ra hu bhai")
   console.log(state)
   localStorage.setItem("users",JSON.stringify([...previousState,data]))


  })

 let retrievedArray = JSON.parse(localStorage.getItem('users'));




 socket.on("leftchat",(data)=>{

setleftperson(data.user)


 
 })
 function man(){

  console.log(leftperson)
 }
 
  

  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
         <Box>
        <Button onClick={toggleDrawer(true)}>  <ViewHeadlineIcon sx={{  color:"white" }}/>
  
        </Button>
      </Box>

      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
     
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results </Typography>
        </StyledBox>
        <StyledBox sx={{ px: 2, pb: 2, height: '100%', overflow: 'auto' }}>
          {/* <Skeleton variant="rectangular" height="100%" /> */}
          <Box>
          {
   retrievedArray && retrievedArray.length > 0 ? (
    retrievedArray
      // Skip messages from the leftperson
      .map((e, index) => (
        <div key={index}>{e.message}</div>  // Render remaining messages
      ))
  ) : null
}


          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;

