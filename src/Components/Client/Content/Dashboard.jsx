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
import logo from "../../../Image/cec979c2a0a9825815fcebf13addde20-removebg-preview.png";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRecipeData,
  setLikeRecipe,
  setReviewRecipe,
} from "../../../Store/Hook/RecipeHook";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: "#FFFFFF",
  },
}));

const customIcons = {
  1: {
    icon: (
      <SentimentVeryDissatisfied
        color="error"
        sx={{ fontSize: { xs: 20, sm: 20, md: 25, lg: 30, xl: 30 } }}
      />
    ),
    label: "Very Dissatisfied",
  },
  2: {
    icon: (
      <SentimentDissatisfied
        color="error"
        sx={{ fontSize: { xs: 20, sm: 20, md: 25, lg: 30, xl: 30 } }}
      />
    ),
    label: "Dissatisfied",
  },
  3: {
    icon: (
      <SentimentSatisfied
        color="warning"
        sx={{ fontSize: { xs: 20, sm: 20, md: 25, lg: 30, xl: 30 } }}
      />
    ),
    label: "Neutral",
  },
  4: {
    icon: (
      <SentimentSatisfiedAlt
        color="success"
        sx={{ fontSize: { xs: 20, sm: 20, md: 25, lg: 30, xl: 30 } }}
      />
    ),
    label: "Satisfied",
  },
  5: {
    icon: (
      <SentimentVerySatisfied
        color="success"
        sx={{ fontSize: { xs: 20, sm: 20, md: 25, lg: 30, xl: 30 } }}
      />
    ),
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

const Dashboard = () => {
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipeData());
  }, [dispatch]);
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");
  const initializeData = () => {
    const defaultCategory = "Appetizers";
    const defaultRecipeFilter = AllRecipeData?.products?.filter(
      (item) => item?.categories === defaultCategory
    );
    setFilterArray(defaultRecipeFilter);
    setSelectedItem(defaultRecipeFilter?.[0]);
    setSelectedCategory(defaultCategory);
  };
  const [selectedItem, setSelectedItem] = useState();
  const likeBoolean = selectedItem?.likes?.some(
    (like) => like?.user === userId
  );
  useEffect(() => {
    initializeData();
  }, [AllRecipeData]);

  const [filterArray, setFilterArray] = useState();
  const FilterHandler = (category) => {
    const allRecipeFilter = AllRecipeData?.products?.filter(
      (item) => item?.categories === category
    );

    setSelectedItem(allRecipeFilter?.[0]);
    setFilterArray(allRecipeFilter);
    setSelectedCategory(category);
  };

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
      direction={{ xs: "column", sm: "column", sm: "row" }}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      gap={2}
      sx={{ p: "0 3%", zIndex: 1 }}
    >
      <Stack sx={{ width: { xs: "100%", sm: "100%", md: "80%" } }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          sx={{
            border: "3px solid #2F2F2F",
            background: "#111111",
            py: 1,
            px: 2,
            borderRadius: 8,
          }}
          gap={5}
        >
          <Avatar
            src={logo}
            alt="logo"
            sx={{
              border: "#FFFFFF 2px solid",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={{ xs: "space-between", sm: "space-around" }}
            gap={{ xs: 0.5, sm: "none" }}
            sx={{
              width: "100%",
              px: 3,
              fontSize: { xs: 10, sm: 11, md: 12, lg: 15, xl: 16 },
            }}
          >
            {[
              "Appetizers",
              "Breakfast",
              "Lunch",
              "Dinner",
              "Desserts",
              "Juice",
              "Salads",
              "Soups",
              "Vegan",
            ].map((category) => (
              <Link
                key={category}
                style={{
                  color: selectedCategory === category ? "#99CB00" : "#FFFFFF",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
                onClick={() => FilterHandler(category)}
              >
                {category}
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          sx={{ p: 3 }}
        >
          <Typography
            fontSize={50}
            fontWeight={500}
            color={"#666666"}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            .01
          </Typography>
          <Stack alignItems={"center"} gap={2}>
            <Stack direction={"row"} alignItems={"flex-end"} gap={4}>
              <Stack
                alignItems={"center"}
                direction={"row"}
                sx={{
                  background: "#222222",
                  p: { xs: 0.5, sm: 1 },
                  color: "#FFFFFF",
                  borderRadius: 5,
                }}
              >
                <AccessTime
                  sx={{ fontSize: { xs: 10, sm: 13, md: 16, lg: 24, xl: 24 } }}
                />
                <Typography
                  fontSize={{ xs: 10, sm: 11, md: 12, lg: 15, xl: 16 }}
                >
                  {selectedItem?.minutes} min
                </Typography>
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
                    width: { xs: 150, sm: 200, md: 280 },
                    height: { xs: 150, sm: 200, md: 280 },
                  }}
                />
              </motion.div>
              <Stack
                alignItems={"center"}
                direction={"row"}
                sx={{
                  background: "#222222",
                  p: { xs: 0.5, sm: 1 },
                  color: "#FFFFFF",
                  borderRadius: 5,
                }}
              >
                <Whatshot
                  sx={{ fontSize: { xs: 10, sm: 13, md: 16, lg: 24, xl: 24 } }}
                />
                <Typography
                  fontSize={{ xs: 10, sm: 11, md: 12, lg: 15, xl: 16 }}
                >
                  {selectedItem?.cal} cal
                </Typography>
              </Stack>
            </Stack>
            <Typography
              fontSize={{ xs: 16, sm: 20, md: 24, lg: 28, xl: 28 }}
              fontWeight={500}
            >
              {selectedItem?.name}
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "#99CB00",
                "&:hover": { background: "#99CB0090" },
                fontSize: { xs: 10, sm: 11, md: 12, lg: 15, xl: 16 },
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
                    <Favorite
                      sx={{
                        color: "#99CB00",
                        fontSize: { xs: 20, sm: 20, md: 25, lg: 30, xl: 30 },
                      }}
                    />
                  ) : (
                    <FavoriteBorder
                      sx={{
                        color: "#99CB00",
                        fontSize: { xs: 20, sm: 20, md: 25, lg: 30, xl: 30 },
                      }}
                    />
                  )}
                </IconButton>
                <Typography fontSize={{ xs: 8, sm: 9, md: 10, lg: 11, xl: 11 }}>
                  {selectedItem?.likes?.length} Like
                </Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton onClick={handleOpenModal}>
                  <Comment
                    sx={{
                      color: "#99CB00",
                      fontSize: { xs: 20, sm: 20, md: 25, lg: 30, xl: 30 },
                    }}
                  />
                </IconButton>
                <Typography fontSize={{ xs: 8, sm: 9, md: 10, lg: 11, xl: 11 }}>
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
        sx={{
          background: "#222222",
          width: { xs: "100%", sm: "100%", sm: "14%" },
          p: 1,
          color: "#FFFFFF",
          borderRadius: 3,
          height: { xs: "100%", sm: "100%", sm: "70dvh" },
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        direction={{ xs: "row", sm: "row", sm: "column" }}
        gap={2}
      >
        {filterArray?.map((item, index) => (
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

export default Dashboard;
