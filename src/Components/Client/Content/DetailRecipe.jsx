import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
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
const DetailRecipe = (props) => {
  return (
    <Box sx={style}>
      <Avatar
        src={props.selectedItem?.image}
        alt="food"
        sx={{ width: 150, height: 150 }}
      />
      <Stack>
        <Typography>
          <b>Name : </b>
          {props.selectedItem?.name}
        </Typography>
        <Typography>
          <b>Category : </b> {props.selectedItem?.categories}
        </Typography>
        <Stack>
          <Typography fontWeight={"bold"}>Ingredient</Typography>
          <ul style={{ paddingLeft: 40 }}>
            {props.selectedItem?.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Stack>
        <Stack direction={"row"} gap={3}>
          <Typography>
            <b>minute : </b>
            {props.selectedItem?.minutes} min
          </Typography>
          <Typography>
            <b>Calory : </b>
            {props.selectedItem?.cal} cal
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Typography>
            <b>Review : </b> {props.selectedItem?.averageRating} / 5
          </Typography>
          {[...Array(props.selectedItem?.averageRating).keys()].map((num) => (
            <Star sx={{ color: "gold", fontSize: 18 }} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default DetailRecipe;
