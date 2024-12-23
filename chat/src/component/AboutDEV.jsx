import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "../all_Css/About.css"
import Resume from './Resume';
import Image from "../images/krishna2.jpg" 
import {Contact} from "../component/Feedback.jsx"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Send Feedback to Developer</Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}  id="child_box" >
          <h2 id="child_modal_title"  >Feedback Section</h2>
          <p id="child-modal-description">
            <Contact/>
          </p>
          <Button onClick={handleClose}>Back</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} id='button'>About the Developer</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id='main_box' sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Development Profile</h2>
          <p id="parent-modal-description">
            <Resume/>
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}