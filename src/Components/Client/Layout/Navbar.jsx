import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../../Image/3d-avatar-profession-as-writer-3d-model-867496ad17.jpg";
import { ArrowDropDown, Search, Star } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      sx={{ p: "1rem 3%" }}
      alignItems={"center"}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Paper
        sx={{
          background: "#22222250",
          p: 2,
          color: "#FFFFFF",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Star sx={{ color: "#9ECB00" }} />
        <Stack direction={"row"} gap={1}>
          <Typography fontSize={30}>40</Typography>
          <Divider sx={{ background: "#FFFFFF", width: "1px" }} />
          <Typography fontSize={14}>
            Health <br /> score
          </Typography>
        </Stack>
      </Paper>
      <Stack>
        <Typography fontSize={50} textAlign={"center"} color={"#222222"}>
          Our best healthy
        </Typography>
        <Typography fontSize={50} textAlign={"center"}>
          food recipe
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={7}>
        <IconButton sx={{ color: "#FFFFFF" }}>
          <Search />
        </IconButton>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Avatar src={logo} alt="logo" />
          <ArrowDropDown
            sx={{ cursor: "pointer" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
        </Stack>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => navigate("/my-profile")}>Profile</MenuItem>
        <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
};

export default Navbar;
