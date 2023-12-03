import React from "react";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";

const CommentPage = ({
  comment,
  handleCommentChange,
  comments,
  handleAddComment,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#272727",
        padding: "20px",
        borderRadius: "8px",
        width: 350,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <div>
        <Typography variant="h6" mb={2}>
          Comments
        </Typography>
        <Stack
          sx={{
            height: "45dvh",
            overflowY: "scroll",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {comments?.map((item, index) => (
            <div
              key={index}
              mb={4}
              style={{ background: "#232323", padding: 2, width: "100%" }}
            >
              <Typography variant="subtitle1" sx={{ color: "#99CB00" }}>
                Ababa
              </Typography>
              <Typography
                fontSize={12}
                sx={{ color: "#FFFFFF", width: "100%" }}
              >
                {item.comment}
              </Typography>
            </div>
          ))}
        </Stack>
      </div>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <TextField
          label="Your Comment"
          fullWidth
          multiline
          rows={1}
          variant="outlined"
          value={comment}
          onChange={handleCommentChange}
          mb={2}
        />
        <IconButton
          variant="contained"
          color="primary"
          onClick={handleAddComment}
          disabled={comment?.trim() === ""}
        >
          <Send />
        </IconButton>
      </Stack>
    </div>
  );
};

export default CommentPage;
