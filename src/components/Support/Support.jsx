import { Button, TextField } from "@mui/material";
import React from "react";
import "../Support/support.css";

const Support = () => {
  return (
    <section id="contact">
      <div class="contact-box">
        <div class="contact-links">
          <h2>Support</h2>
          <div class="links">
            <div class="link">
              <a>
                <img
                  src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </div>
            <div class="link">
              <a>
                <img
                  src="https://i.postimg.cc/YCV2QBJg/github.png"
                  alt="github"
                />
              </a>
            </div>

            <div class="link">
              <a>
                <img
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
              style={{
                marginLeft: "65px",
                backgroundColor: "black",
                width: "60px",
                height: "40px",
              }}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;
