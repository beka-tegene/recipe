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
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../Store/Hook/AuthHook";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await dispatch(setLogin({ data: { email, password } }));
    }
  };
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
        onSubmit={submitHandler}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{ background: "#99CB00", "&:hover": { background: "#99CB0090" } }}
          type="submit"
        >
          Login
        </Button>
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          you don't have an account?
          <Link
            style={{
              textDecoration: "none",
              color: "#99CB00",
            }}
            to={"/register"}
          >
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Stack>
  );
};

export default Login;
