import React from "react";
import { useNavigate } from "react-router-dom";

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
      <h1 style={{ marginTop: "40px", color: "white" }}>Dear Customer!</h1>

      <h2 style={{ marginTop: "20px", color: "white" }}>
        Thank You for your purchase!
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
        by clicking the "Support" button on the right side of this page.
      </h2>

      <h2 style={{ marginTop: "20px", color: "white" }}>Sincerely Yours,</h2>
      <h1 style={{ color: "white" }}>"Premium Cars" AG</h1>
    </div>
  );
};

export default ThankYou;
