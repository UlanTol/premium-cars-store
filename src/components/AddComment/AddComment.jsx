import { AccountCircle } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { commentsContext } from "../../contexts/commentsContext";
import SendIcon from "@mui/icons-material/Send";

const CommentBox = () => {
  const { addComment } = useContext(commentsContext);

  const [nick, setNick] = useState("");
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  function handleSaveComment() {
    let newComment = {
      nick,
      comment,
    };
    if (!nick.trim("") || !comment.trim("")) {
      alert("Please type your Name and comment");
    } else {
      addComment(newComment);
      navigate("/comments");
    }
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
        alignItems: "center",
        textAlign: "center",
      }}
      noValidate
      autoComplete="off">
      <h2 style={{ color: "gold", marginBottom: "20px" }}>
        Leave your feedback or comment here
      </h2>

      <TextField
        id="input-with-icon-textfield"
        label="Your Nick"
        value={nick}
        onChange={e => setNick(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="input-with-icon-textfield"
        label="Type your comment here"
        value={comment}
        onChange={e => setComment(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        color="warning"
        size="large"
        endIcon={<SendIcon />}
        onClick={() => handleSaveComment()}>
        Add Feedback/Comment
      </Button>
    </Box>
  );
};

export default CommentBox;
