import { Email, Lock } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const Login = () => {
  return (
    <Stack
      sx={{
        background: "linear-gradient(90deg, #0C0C0C 50%, #1C1C1C 50%)",
        height: "100dvh",
        width: "100%",
        color: "#FFFFFF",
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ToastContainer />
      <Paper
        component={"form"}
        sx={{
          width: 450,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          background: "#2C2C2C ",
          color: "#ffffff",
        }}
      >
        <Stack gap={1}>
          <Typography
            fontSize={28}
            fontWeight={600}
            textAlign={"center"}
            color={"#99CB00"}
          >
            Recipe Management System
          </Typography>
          <Typography fontSize={20} textAlign={"center"}>
            Login
          </Typography>
        </Stack>
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="email" sx={{ color: "#FFFFFF" }}>
            Email
          </InputLabel>
          <Input
            id="email"
            startAdornment={
              <InputAdornment position="start">
                <Email sx={{ color: "#494949" }} />
              </InputAdornment>
            }
            type="email"
            sx={{
              py: 1,
              color: "#FFFFFF",
            }}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="Password" sx={{ color: "#FFFFFF" }}>
            Password
          </InputLabel>
          <Input
            id="Password"
            startAdornment={
              <InputAdornment position="start">
                <Lock sx={{ color: "#494949" }} />
              </InputAdornment>
            }
            type="password"
            sx={{
              py: 1,
              color: "#FFFFFF",
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{ background: "#99CB00", "&:hover": { background: "#99CB0090" } }}
        >
          Login
        </Button>
      </Paper>
    </Stack>
  );
};

export default Login;
