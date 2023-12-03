import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import food from "../../../Image/Creamy-spinach-chicken-2fa1d5b.jpg";
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

const MyPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        gap={3}
        flexWrap={"wrap"}
      >
        <Stack sx={{ border: "2px solid #CCCCCC", p: 2, borderRadius: 2 }}>
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
                <Typography fontSize={11}>12 Like</Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton>
                  <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                </IconButton>
                <Typography fontSize={11}>12 Comment</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
              <IconButton>
                <Edit sx={{ color: "#0000FF" }} />
              </IconButton>
              <IconButton>
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
                <Typography>15m</Typography>
              </Stack>

              <Avatar
                src={food}
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
        </Stack>
        <Stack sx={{ border: "2px solid #CCCCCC", p: 2, borderRadius: 2 }}>
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
                <Typography fontSize={11}>12 Like</Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton>
                  <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                </IconButton>
                <Typography fontSize={11}>12 Comment</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
              <IconButton>
                <Edit sx={{ color: "#0000FF" }} />
              </IconButton>
              <IconButton>
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
                <Typography>15m</Typography>
              </Stack>

              <Avatar
                src={food}
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
        </Stack>
        <Stack sx={{ border: "2px solid #CCCCCC", p: 2, borderRadius: 2 }}>
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
                <Typography fontSize={11}>12 Like</Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton>
                  <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                </IconButton>
                <Typography fontSize={11}>12 Comment</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
              <IconButton>
                <Edit sx={{ color: "#0000FF" }} />
              </IconButton>
              <IconButton>
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
                <Typography>15m</Typography>
              </Stack>

              <Avatar
                src={food}
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
        </Stack>
        <Stack sx={{ border: "2px solid #CCCCCC", p: 2, borderRadius: 2 }}>
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
                <Typography fontSize={11}>12 Like</Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton>
                  <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                </IconButton>
                <Typography fontSize={11}>12 Comment</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
              <IconButton>
                <Edit sx={{ color: "#0000FF" }} />
              </IconButton>
              <IconButton>
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
                <Typography>15m</Typography>
              </Stack>

              <Avatar
                src={food}
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
        </Stack>
        <Stack sx={{ border: "2px solid #CCCCCC", p: 2, borderRadius: 2 }}>
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
                <Typography fontSize={11}>12 Like</Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton>
                  <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                </IconButton>
                <Typography fontSize={11}>12 Comment</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
              <IconButton>
                <Edit sx={{ color: "#0000FF" }} />
              </IconButton>
              <IconButton>
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
                <Typography>15m</Typography>
              </Stack>

              <Avatar
                src={food}
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
        </Stack>
        <Stack sx={{ border: "2px solid #CCCCCC", p: 2, borderRadius: 2 }}>
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
                <Typography fontSize={11}>12 Like</Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton>
                  <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                </IconButton>
                <Typography fontSize={11}>12 Comment</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
              <IconButton>
                <Edit sx={{ color: "#0000FF" }} />
              </IconButton>
              <IconButton>
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
                <Typography>15m</Typography>
              </Stack>

              <Avatar
                src={food}
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
        </Stack>
        <Stack sx={{ border: "2px solid #CCCCCC", p: 2, borderRadius: 2 }}>
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
                <Typography fontSize={11}>12 Like</Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <IconButton>
                  <Comment sx={{ color: "#99CB00", fontSize: 30 }} />
                </IconButton>
                <Typography fontSize={11}>12 Comment</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
              <IconButton>
                <Edit sx={{ color: "#0000FF" }} />
              </IconButton>
              <IconButton>
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
                <Typography>15m</Typography>
              </Stack>

              <Avatar
                src={food}
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
    </Box>
  );
};

export default MyPost;
