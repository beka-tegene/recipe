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
import React from "react";

const Register = () => {
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
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{ background: "#99CB00", "&:hover": { background: "#99CB0090" } }}
        >
          Register
        </Button>
      </Paper>
    </Stack>
  );
};

export default Register;
