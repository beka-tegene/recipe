import { Stack, Typography } from "@mui/material";
import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      sx={{
        background: "linear-gradient(90deg, #0C0C0C 50%, #1C1C1C 50%)",
        height: "100dvh",
        width: "100%",
        color: "#FFFFFF",
      }}
    >
      <Stack
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%  ,-50%)",
          zIndex: 0,
        }}
      >
        <Typography
          fontSize={{ xs: 30, sm: 40, md: 60, lg: 80, xl: 100 }}
          fontWeight={900}
          color={"#222222"}
        >
          Healthy Food
        </Typography>
      </Stack>
      <SideBar />
      <Stack sx={{width:"100%"}}>
        <Navbar />
        {props.children}
      </Stack>
    </Stack>
  );
};

export default Layout;
