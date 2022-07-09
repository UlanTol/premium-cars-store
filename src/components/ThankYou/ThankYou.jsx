import { Box, Button } from "@mui/material";
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
      <h3 style={{ marginTop: "30px", color: "white" }}>Dear Customer,</h3>

      <h3 style={{ marginTop: "20px", color: "white" }}>
        Thank You very much for your purchase!
      </h3>
      <h3 style={{ color: "white" }}>
        Your Order has been placed successfully.
      </h3>
      <h3 style={{ color: "white" }}>We will contact you soon!</h3>
      <h3 style={{ marginTop: "30px", color: "white" }}>
        If you need help or you have a question,
      </h3>
      <h3 style={{ color: "white" }}>
        please contact us by submitting your message
      </h3>
      <h3 style={{ color: "white" }}>
        clicking here{" "}
        <Button
          variant="outlined"
          color="error"
          size="large"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate("/support")}
          endIcon={<SendIcon />}>
          Support
        </Button>{" "}
      </h3>
      <h3 style={{ color: "white" }}>
        and please leave your feedback{" "}
        <Button
          variant="outlined"
          color="warning"
          size="large"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate("/add-comment")}
          endIcon={<SendIcon />}>
          Your Feedback
        </Button>{" "}
      </h3>

      <h3 style={{ marginTop: "20px", color: "white" }}>Sincerely Yours,</h3>
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
