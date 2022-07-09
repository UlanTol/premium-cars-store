import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Support/support.css";

const Support = () => {
  const navigate = useNavigate();
  return (
    <section id="contact">
      <div class="contact-box">
        <div class="contact-links">
          <h2>Support</h2>
          <div class="links">
            <div class="link">
              <a>
                <img
                  className="supportImage"
                  src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </div>
            <div class="link">
              <a>
                <img
                  className="supportImage"
                  src="https://i.postimg.cc/YCV2QBJg/github.png"
                  alt="github"
                />
              </a>
            </div>

            <div class="link">
              <a>
                <img
                  className="supportImage"
                  src="https://i.postimg.cc/NjLfyjPB/email.png"
                  alt="email"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="contact-form-wrapper">
          <form>
            <div class="form-item">
              <TextField placeholder="name" required />
            </div>
            <div class="form-item">
              <TextField placeholder="phone" required />
            </div>
            <div class="form-item">
              <TextField placeholder="your question" required />
            </div>
            <Button
              onClick={() =>
                alert(
                  "Thank You for your message. We'll contact you very soon."
                )
              }
              style={{
                marginLeft: "65px",
                marginTop: "10px",
                backgroundColor: "black",
                width: "60px",
                height: "40px",
              }}>
              Send
            </Button>
          </form>
          <Button
            style={{ marginTop: "20px", color: "gold" }}
            onClick={() => navigate("/all-cars")}>
            Drive to our Shop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Support;
