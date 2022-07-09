import React from "react";
import { useNavigate } from "react-router-dom";
import "../SMS/sms.css";

const SMS = () => {
  const navigate = useNavigate();
  return (
    <div id="sms">
      <p onClick={() => navigate("/support")} id="text">
        Support
      </p>
    </div>
  );
};

export default SMS;
