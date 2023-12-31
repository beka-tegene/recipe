import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../../Image/cec979c2a0a9825815fcebf13addde20-removebg-preview.png";
import {
  AccessTime,
  Comment,
  Delete,
  Edit,
  Favorite,
  Whatshot,
} from "@mui/icons-material";
import { useState } from "react";
import DetailRecipe from "./DetailRecipe";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRecipeData,
  setDeleteRecipe,
} from "../../../Store/Hook/RecipeHook";
import EditPage from "./Edit";
const MyPost = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [dataEdit, setDataEdit] = useState();
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = (item) => {
    setDataEdit(item);
    setOpen1(true);
  };
  const handleClose1 = () => setOpen1(false);
  const token = Cookies.get("token");
  const decodedToken = jwt_decode(token);
  const userId = decodedToken.userId;
  const AllRecipeData = useSelector(
    (state) => state.RecipeHook.outputAllRecipe
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipeData());
  }, [dispatch]);
  const allRecipeFilter = AllRecipeData?.products?.filter(
    (item) => item?.user === userId
  );
  const DeleteHandler = (productId) => {
    dispatch(setDeleteRecipe({ data: { productId } }));
  };
  console.log(allRecipeFilter);
  return (
    <Box
      sx={{
        zIndex: 1,
        mx: "3%",
        height: "73dvh",
        overflowY: "scroll",
        background: "#27272790",
        p: 2,
        "::-webkit-scrollbar": {
          display: "none",
        },
        borderRadius: 2,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={2}
        flexWrap={"wrap"}
      >
        {allRecipeFilter?.length > 0 ? (
          allRecipeFilter?.map((item, index) => (
            <Stack
              sx={{ border: "2px solid #CCCCCC", p: 1, borderRadius: 2 }}
              key={index}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} alignItems={"center"} gap={1}>
                  <Stack alignItems={"center"}>
                    <IconButton>
                      <Favorite sx={{ color: "#99CB00", fontSize: 30 }} />
                    </IconButton>
                    <Typography fontSize={11}>
                      {item?.likes?.length} Like
                    </Typography>
                  </Stack>
                  <Stack alignItems={"center"}>
                    <IconButton>
                      <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                    </IconButton>
                    <Typography fontSize={11}>
                      {item?.comments?.length} Comment
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
                  <IconButton onClick={() => handleOpen1(item)}>
                    <Edit sx={{ color: "#0000FF" }} />
                  </IconButton>
                  <IconButton onClick={() => DeleteHandler(item._id)}>
                    <Delete sx={{ color: "#FF0000" }} />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack alignItems={"center"} gap={1}>
                <Stack direction={"row"} alignItems={"flex-end"} gap={2}>
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
                    <Typography>{item.minutes} min</Typography>
                  </Stack>

                  <Avatar
                    src={item.image}
                    alt="food"
                    sx={{
                      width: 180,
                      height: 180,
                    }}
                  />
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
                    <Typography>{item.cal} cal</Typography>
                  </Stack>
                </Stack>
                <Typography fontSize={28} fontWeight={500}>
                  {item.name}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#99CB00",
                    "&:hover": { background: "#99CB0090" },
                  }}
                  onClick={() => handleOpen(item)}
                >
                  Start Cooking
                </Button>
              </Stack>
            </Stack>
          ))
        ) : (
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ width: "100%", height: "100%" }}
            gap={5}
          >
            <Avatar
              src={logo}
              alt="logo"
              sx={{
                borderBottom: "#FFFFFF 2px solid",
                width: 150,
                height: 150,
              }}
            />
            <Typography fontSize={24}>
              There no post if you want to post click add icon
            </Typography>
          </Stack>
        )}
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DetailRecipe selectedItem={selectedItem} />
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditPage dataEdit={dataEdit} />
      </Modal>
    </Box>
  );
};

export default MyPost;
