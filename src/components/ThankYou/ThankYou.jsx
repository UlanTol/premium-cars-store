import React from "react";

const ThankYou = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}>
      <h1 style={{ marginTop: "40px" }}>Dear Customer!</h1>

      <h2 style={{ marginTop: "20px" }}>Thank You for your purchase!</h2>
      <h2>Your Order has been placed successfully.</h2>
      <h2>We will contact you soon!</h2>
      <h2 style={{ marginTop: "30px" }}>
        If you need help or you have a question,
      </h2>
      <h2>please contact us by submitting your message </h2>
      <h2>in the 'Get in Touch' form given in the Footer of our web-site.</h2>

      <h2 style={{ marginTop: "20px" }}>Sincerely Yours,</h2>
      <h1>"Premium Cars" AG</h1>
    </div>
  );
};

export default ThankYou;
