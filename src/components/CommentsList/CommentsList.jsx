import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { commentsContext } from "../../contexts/commentsContext";
import SendIcon from "@mui/icons-material/Send";

const CommentsList = () => {
  const { getComments, comments, deleteComment } = useContext(commentsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}>
      <h3 style={{ color: "gold" }}>Feedbacks and Comments</h3>
      {comments.map(item => (
        <div key={item.id}>
          {item.nick} wrote: {item.comment}{" "}
          <Button
            size="small"
            sx={{ color: "red" }}
            onClick={() => deleteComment(item.id)}>
            Delete
          </Button>
          <Button
            size="small"
            sx={{ color: "aqua" }}
            onClick={() => navigate(`/edit-comment/${item.id}`)}>
            Edit
          </Button>
        </div>
      ))}
      <Button
        href="/add-comment"
        style={{ marginTop: "20px" }}
        variant="contained"
        color="warning"
        endIcon={<SendIcon />}>
        Leave your Feedback/Comment
      </Button>
    </div>
  );
};

export default CommentsList;
