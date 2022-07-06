import { useAuth0 } from "@auth0/auth0-react";
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
        <div className="help-sec">
          <div className="footer-title">Help</div>
          <ul>
            <li>Help Me</li>
            <li>Feedback</li>
            <li>Report an Issue / Bug</li>
          </ul>
        </div>
        <div className="g-i-t">
          <div className="footer-title">Get in Touch</div>
          <form action="/" method="post" className="space-y-2">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Message" />
            <button type="submit" className="f-btn">
              Submit
            </button>
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
