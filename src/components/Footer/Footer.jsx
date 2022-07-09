import { useAuth0 } from "@auth0/auth0-react";
import { Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Footer/style.css";

import { Button, notification } from "antd";

const openNotification = () => {
  notification.open({
    message: "Message",
    description:
      "Thank you for your message, we will contact you as soon as possible)",
    placement: "bottomLeft",
    bottom: 50,
    duration: 3,
    rtl: true,
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

const Footer = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div
        style={{
          marginTop: "90px",
          borderTop: "2px solid white",
        }}
        className="f-item-con">
        <div className="app-info">
          <span className="app-name">
            <span className="app-initial">P</span>remium Cars AG
          </span>
          <p>
            <strong> Buy your best car</strong> and enjoy <strong></strong> it
          </p>
        </div>
        <div className="useful-links">
          <div className="footer-title">Useful Links</div>
          <ul>
            <li onClick={() => navigate("/")}>Main</li>
            <li onClick={() => navigate("/all-cars")}>Shop</li>
            <li
              onClick={() => {
                loginWithRedirect();
                navigate("/all-cars");
              }}>
              Sign In
            </li>{" "}
            <li
              onClick={() => {
                navigate("/address");
              }}>
              Address
            </li>
          </ul>
        </div>

        <div className="g-i-t">
          <div className="footer-title">Get in Touch</div>
          <form action="/" method="post" className="space-y-2">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Message" />

            <Button
              type="primary"
              className="f-btn"
              onClick={() => openNotification("bottomLeft")}>
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="cr-con">
        Copyright &copy; 2022 | Made by Ruslan and Ulan
      </div>
    </footer>
  );
};

export default Footer;
