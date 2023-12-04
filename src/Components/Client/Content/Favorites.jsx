import {
  Avatar,
  Button,
  IconButton,
  Modal,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
import CommentPage from "./Comment";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRecipeData,
  setLikeRecipe,
} from "../../../Store/Hook/RecipeHook";
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
  const token = Cookies.get("token");
  const decodedToken = jwt_decode(token);
  const userId = decodedToken.userId;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const AllRecipeData = useSelector(
    (state) => state.RecipeHook.outputAllRecipe
  );
  const [selectedItem, setSelectedItem] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipeData());
  }, [dispatch]);

  const allRecipeFilter = AllRecipeData?.products?.filter((item) =>
    item?.likes?.some((like) => like?.user === userId)
  );
  const likeBoolean = selectedItem?.likes?.some(
    (like) => like?.user === userId
  );
  console.log(allRecipeFilter);
  const initializeData = () => {
    setSelectedItem(allRecipeFilter?.[0]);
  };
  useEffect(() => {
    initializeData();
  }, [AllRecipeData]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, { comment }]);
      setComment("");
    }
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const likeHandler = (productId) => {
    dispatch(setLikeRecipe({ data: { productId, userId } }));
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      gap={2}
      sx={{ p: "0 3%", zIndex: 1 }}
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
                <Typography>{selectedItem?.minutes} min</Typography>
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
                  src={selectedItem?.image}
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
                <Typography>{selectedItem?.cal} cal</Typography>
              </Stack>
            </Stack>
            <Typography fontSize={28} fontWeight={500}>
              {selectedItem?.name}
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
          <Stack alignItems={"flex-end"} gap={2}>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <Stack alignItems={"center"}>
                <IconButton onClick={() => likeHandler(selectedItem?._id)}>
                  {likeBoolean ? (
                    <Favorite sx={{ color: "#99CB00", fontSize: 30 }} />
                  ) : (
                    <FavoriteBorder sx={{ color: "#99CB00", fontSize: 30 }} />
                  )}
                </IconButton>
                <Typography fontSize={11}>
                  {selectedItem?.likes?.length} Like
                </Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton onClick={handleOpenModal}>
                  <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                </IconButton>
                <Typography fontSize={11}>
                  {selectedItem?.comments?.length} Comment
                </Typography>
                <Modal open={isModalOpen} onClose={handleCloseModal}>
                  <CommentPage
                    comments={comments}
                    comment={comment}
                    handleCommentChange={handleCommentChange}
                    handleAddComment={handleAddComment}
                  />
                </Modal>
              </Stack>
            </Stack>
            <Stack alignItems={"center"} gap={0.5}>
              <StyledRating
                name="highlight-selected-only"
                defaultValue={selectedItem?.averageRating}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
              />
              <Typography fontSize={11}>
                {selectedItem?.averageRating} / 5 Review
              </Typography>
            </Stack>
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
        {allRecipeFilter?.map((item, index) => (
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
            onClick={() => handleItemClick(item)}
            key={index}
          >
            <Avatar
              src={item.image}
              alt="food"
              sx={{
                width: 100,
                height: 100,
              }}
            />
            <Typography fontSize={15}>{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DetailRecipe selectedItem={selectedItem} />
      </Modal>
    </Stack>
  );
};

export default Favorites;
