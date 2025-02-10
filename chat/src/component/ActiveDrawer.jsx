import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import socketio from "socket.io-client";
import { useState, useEffect } from "react";

const ENDPOINT = "https://krishna-chat-app-etw8.onrender.com/";
const drawerBleeding = 56;
let socket;

const Root = styled("div")(({ theme }) => ({
  height: "50%",
  width: "50%",
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  socket = socketio(ENDPOINT, { transports: ["websocket"] });

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    socket.on("userjoined", (data) => {
      setState((prevState) => {
        const updatedState = [...prevState, data];
        localStorage.setItem("users", JSON.stringify(updatedState));
        return updatedState;
      });
    });

    socket.on("leftchat", (data) => {
      setState((prevState) => {
        const updatedState = prevState.filter((user) => user.user !== data.user);
        localStorage.setItem("users", JSON.stringify(updatedState));
        return updatedState;
      });
    });

    return () => {
      socket.off("userjoined");
      socket.off("leftchat");
    };
  }, []);

  const { window } = props;
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Root>
      <Box>
        <Button onClick={toggleDrawer(true)}>
          <ViewHeadlineIcon sx={{ color: "white" }} />
        </Button>
      </Box>

      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{ keepMounted: true }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            {state.length} users online
          </Typography>
        </StyledBox>
        <StyledBox sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}>
          <Box>
            {state.length > 0 ? (
              state.map((e, index) => <div key={index}>{e.message}</div>)
            ) : (
              <Typography>No users online</Typography>
            )}
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
