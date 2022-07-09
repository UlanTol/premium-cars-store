import { Box, Button, ButtonBase } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}>
      <h1 style={{ marginTop: "30px", color: "white" }}>Dear Customer,</h1>

      <h2 style={{ marginTop: "20px", color: "white" }}>
        Thank You very much for your purchase!
      </h2>
      <h2 style={{ color: "white" }}>
        Your Order has been placed successfully.
      </h2>
      <h2 style={{ color: "white" }}>We will contact you soon!</h2>
      <h2 style={{ marginTop: "30px", color: "white" }}>
        If you need help or you have a question,
      </h2>
      <h2 style={{ color: "white" }}>
        please contact us by submitting your message
      </h2>
      <h2 style={{ color: "white" }}>
        clicking here{" "}
        <Button
          variant="outlined"
          color="error"
          size="large"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate("/footer")}
          endIcon={<SendIcon />}>
          Support
        </Button>{" "}
      </h2>
      <h2 style={{ color: "white" }}>
        and please leave your feedback/comment here:{" "}
        <Button
          variant="outlined"
          color="warning"
          size="large"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate("/comment")}
          endIcon={<SendIcon />}>
          Your Feedback
        </Button>{" "}
      </h2>

      <h2 style={{ marginTop: "20px", color: "white" }}>Sincerely Yours,</h2>
      <h1 style={{ color: "gold" }}>"Premium Cars" AG</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}>
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={() => navigate("/all-cars")}
          endIcon={<SendIcon />}>
          Back to Shop
        </Button>
      </Box>
    </div>
  );
};

export default ThankYou;
