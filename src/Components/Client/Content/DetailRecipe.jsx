import {
  Avatar,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import food from "../../../Image/Creamy-spinach-chicken-2fa1d5b.jpg";
import { Star } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  background: "#555555",
  border: "2px solid #99CB00",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const DetailRecipe = () => {
  return (
    <Box sx={style}>
      <Avatar src={food} alt="food" sx={{ width: 150, height: 150 }} />
      <Stack>
        <Typography>
          <b>Name : </b>Fall Spinach Salad
        </Typography>
        <Typography>
          <b>Category : </b> juice
        </Typography>
        <Stack>
          <Typography fontWeight={"bold"}>Ingredient</Typography>
          <ul style={{ paddingLeft: 40 }}>
            <li>food</li>
            <li>food</li>
            <li>food</li>
          </ul>
        </Stack>
        <Stack direction={"row"} gap={3}>
          <Typography>
            <b>minute : </b>15m
          </Typography>
          <Typography>
            <b>Calory : </b>120cal
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Typography>
            <b>Review : </b> 4 / 5
          </Typography>
          <Star sx={{ color: "gold", fontSize: 18 }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default DetailRecipe;
