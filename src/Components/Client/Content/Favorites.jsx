import {
  Avatar,
  Button,
  IconButton,
  Modal,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import food from "../../../Image/Creamy-spinach-chicken-2fa1d5b.jpg";
import food1 from "../../../Image/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import {
  AccessTime,
  Comment,
  Favorite,
  FavoriteBorder,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
  Whatshot,
} from "@mui/icons-material";
import DetailRecipe from "./DetailRecipe";
const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: "#FFFFFF",
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfied color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfied color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfied color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAlt color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfied color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};
const Favorites = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [favoriteLike, setFavoriteLike] = useState(true);
  return (
    <Stack
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      gap={2}
      sx={{ p: "0 3%" ,zIndex:1}}
    >
      <Stack sx={{ width: "80%" }}>
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          sx={{ p: 3 }}
        >
          <Typography fontSize={50} fontWeight={500} color={"#666666"}>
            .01
          </Typography>
          <Stack alignItems={"center"} gap={2}>
            <Stack direction={"row"} alignItems={"flex-end"} gap={4}>
              <Stack
                alignItems={"center"}
                direction={"row"}
                sx={{
                  background: "#222222",
                  p: 1,
                  color: "#FFFFFF",
                  borderRadius: 5,
                }}
              >
                <AccessTime />
                <Typography>15m</Typography>
              </Stack>
              <motion.div
                animate={{ rotate: 360 }}
                initial={{ rotate: 0 }}
                transition={{
                  delay: 0,
                  type: "tween",
                  duration: 100,
                  repeat: Infinity,
                }}
              >
                <Avatar
                  src={food}
                  alt="food"
                  sx={{
                    width: 280,
                    height: 280,
                  }}
                />
              </motion.div>
              <Stack
                alignItems={"center"}
                direction={"row"}
                sx={{
                  background: "#222222",
                  p: 1,
                  color: "#FFFFFF",
                  borderRadius: 5,
                }}
              >
                <Whatshot />
                <Typography>120cal</Typography>
              </Stack>
            </Stack>
            <Typography fontSize={28} fontWeight={500}>
              Fall Spinach Salad
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "#99CB00",
                "&:hover": { background: "#99CB0090" },
              }}
              onClick={handleOpen}
            >
              Start Cooking
            </Button>
          </Stack>
          <Stack alignItems={"flex-end"}>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <Stack alignItems={"center"}>
                <IconButton onClick={() => setFavoriteLike(!favoriteLike)}>
                  {favoriteLike ? (
                    <Favorite sx={{ color: "#99CB00", fontSize: 30 }} />
                  ) : (
                    <FavoriteBorder sx={{ color: "#99CB00", fontSize: 30 }} />
                  )}
                </IconButton>
                <Typography fontSize={11}>12 Like</Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton>
                  <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                </IconButton>
                <Typography fontSize={11}>12 Comment</Typography>
              </Stack>
            </Stack>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={1}
              IconContainerComponent={IconContainer}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        // flexGrow={0.25}
        sx={{
          background: "#222222",
          width: "14%",
          p: 1,
          color: "#FFFFFF",
          borderRadius: 3,
          height: "70dvh",
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        gap={2}
      >
        <Stack
          alignItems={"center"}
          gap={2}
          sx={{
            background: "#272727",
            p: 1,
            color: "#FFFFFF",
            borderRadius: 3,
            cursor: "pointer",
          }}
        >
          <Avatar
            src={food}
            alt="food"
            sx={{
              width: 100,
              height: 100,
            }}
          />
          <Typography fontSize={15}>Fall Spinach Salad</Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          gap={2}
          sx={{
            background: "#444444",
            p: 1,
            color: "#FFFFFF",
            borderRadius: 3,
            cursor: "pointer",
          }}
        >
          <Avatar
            src={food1}
            alt="food"
            sx={{
              width: 100,
              height: 100,
            }}
          />
          <Typography fontSize={15}>Fall Spinach Salad</Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          gap={2}
          sx={{
            background: "#444444",
            p: 1,
            color: "#FFFFFF",
            borderRadius: 3,
            cursor: "pointer",
          }}
        >
          <Avatar
            src={food1}
            alt="food"
            sx={{
              width: 100,
              height: 100,
            }}
          />
          <Typography fontSize={15}>Fall Spinach Salad</Typography>
        </Stack>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DetailRecipe />
      </Modal>
    </Stack>
  );
};

export default Favorites;
