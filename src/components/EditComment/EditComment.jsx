import { Button, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { commentsContext } from "../../contexts/commentsContext";

const EditComment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getOneComment, oneComment, updateComment } =
    useContext(commentsContext);

  const [nick, setNick] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getOneComment(id);
  }, []);
  useEffect(() => {
    if (oneComment) {
      setNick(oneComment.nick);
      setComment(oneComment.comment);
    }
  }, [oneComment]);

  function handleSave() {
    let updatedComment = {
      nick,
      comment,
    };
    updateComment(id, updatedComment);
    navigate("/comments");
  }

  return (
    <Container maxWidth="sm">
      {oneComment ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            textAlign: "center",
          }}>
          <h1 style={{ color: "gold" }}>Edit your Comment</h1>
          <TextField
            value={nick}
            onChange={event => setNick(event.target.value)}
            label="Nick"
            variant="outlined"
          />
          <TextField
            value={comment}
            onChange={event => setComment(event.target.value)}
            label="comment"
            variant="outlined"
          />
          <Button onClick={handleSave} variant="contained" color="warning">
            Save
          </Button>
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default EditComment;
