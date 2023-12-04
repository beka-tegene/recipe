import { AccountCircle, Email, Lock } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setRegister } from "../../Store/Hook/AuthHook";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      await dispatch(
        setRegister({ data: { full_name:fullName, email, gender, password } })
      );
      resetForm();
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
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
          background: "#2C2C2C",
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
            Sign Up
          </Typography>
        </Stack>
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="fullname" sx={{ color: "#FFFFFF" }}>
            Full Name
          </InputLabel>
          <Input
            id="fullname"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle sx={{ color: "#494949" }} />
              </InputAdornment>
            }
            type="text"
            sx={{
              py: 1,
              color: "#FFFFFF",
            }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={!!errors.fullName}
            helperText={errors.fullName}
          />
        </FormControl>
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
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ color: "#FFFFFF" }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            error={!!errors.gender}
            helperText={errors.gender}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
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
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="ConfirmPassword" sx={{ color: "#FFFFFF" }}>
            Confirm Password
          </InputLabel>
          <Input
            id="ConfirmPassword"
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{ background: "#99CB00", "&:hover": { background: "#99CB0090" } }}
          type="submit"
        >
          Register
        </Button>
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          you already have an account?
          <Link
            style={{
              textDecoration: "none",
              color: "#99CB00",
            }}
            to={"/"}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Stack>
  );
};

export default Register;
