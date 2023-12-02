import { Avatar, IconButton, Modal, Stack } from "@mui/material";
import React from "react";
import logo from "../../../Image/cec979c2a0a9825815fcebf13addde20-removebg-preview.png";
import {
  FavoriteBorder,
  HomeOutlined,
  PermIdentity,
  PostAdd,
} from "@mui/icons-material";
import CreateRecipe from "../Content/CreateRecipe";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
const SideBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dashboards = useMatch("/dashboard");
  const favorites = useMatch("/favorite");
  const dashs = useMatch("/my-profile");
  return (
    <Stack
      sx={{ background: "#1C1C1C", height: "100dvh", width: 100 }}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Avatar
        src={logo}
        alt="logo"
        sx={{ borderBottom: "#FFFFFF 2px solid", mt: 3, width: 56, height: 56 }}
      />
      <Stack
        sx={{ height: "80dvh", width: 70 }}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Stack
          sx={{ height: "60dvh", width: 70 }}
          alignItems={"center"}
          gap={5}
        >
          <IconButton
            sx={{
              background: dashboards && "#9ECB00",
              "&:hover": { background: dashboards && "#9ECB00" },
            }}
            onClick={() => navigate("/dashboard")}
          >
            <HomeOutlined
              sx={{
                fontSize: "30px",
                color: dashboards ? "#272727" : "#CCCCCC",
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => navigate("/favorite")}
            sx={{
              background: favorites && "#9ECB00",
              "&:hover": { background: favorites && "#9ECB00" },
            }}
          >
            <FavoriteBorder
              sx={{
                fontSize: "30px",
                color: favorites ? "#272727" : "#CCCCCC",
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => navigate("/my-profile")}
            sx={{
              background: dashs && "#9ECB00",
              "&:hover": { background: dashs && "#9ECB00" },
            }}
          >
            <PermIdentity
              sx={{
                fontSize: "30px",
                color: dashs ? "#272727" : "#CCCCCC",
              }}
            />
          </IconButton>
        </Stack>
        <IconButton
          sx={{ background: "#DDDDDD", "&:hover": { background: "#CCCCCC" } }}
          onClick={handleOpen}
        >
          <PostAdd sx={{ fontSize: "30px" }} />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CreateRecipe />
        </Modal>
      </Stack>
    </Stack>
  );
};

export default SideBar;
