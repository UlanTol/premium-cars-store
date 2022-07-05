import { useAuth0 } from "@auth0/auth0-react";
import { TextField } from "@mui/material";
import { Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Footer/style.css";

const Footer = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  return (
    <footer>
      <div
        style={{ marginTop: "90px", borderTop: "2px solid white" }}
        class="f-item-con">
        <div class="app-info">
          <span class="app-name">
            <span class="app-initial">P</span>remium Cars
          </span>
          <p>
            <strong> Buy your best car</strong> enjoy <strong></strong> them
          </p>
        </div>
        <div class="useful-links">
          <div class="footer-title">Useful Links</div>
          <ul>
            <li onClick={() => navigate("/")}>Main</li>
            <li onClick={() => navigate("/cars")}>Shop</li>
            <li
              onClick={() => {
                loginWithRedirect();
                navigate("/cars");
              }}>
              Sign In
            </li>
          </ul>
        </div>
        <div class="help-sec">
          <div class="footer-title">Help</div>
          <ul>
            <li>Help Me</li>
            <li>Feedback</li>
            <li>Report a Issue / Bug</li>
          </ul>
        </div>
        <div class="g-i-t">
          <div class="footer-title">Get in Touch</div>
          <form action="/" method="post" class="space-y-2">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Message" />
            <button type="submit" class="f-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div class="cr-con">Copyright &copy; 2022 | Made by Rawnge</div>
    </footer>
  );
};

export default Footer;
