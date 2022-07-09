import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ marginTop: "30px" }}>
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="h6" color={"white"}>
          Sports cars are our passion - and because we would like to share this
          feeling with you, we founded Premium Cars AG in 2013. Our vision is
          clear: to give everyone the opportunity to buy "their" sports car -
          and do it flexibly, affordably and with the greatest possible customer
          orientation. There are many dreams in life that are very difficult to
          achieve. But there are also long-cherished wishes that can be
          implemented without much effort. Driving in a luxury sports car in
          particular belongs in this category. Anyone interested in such an
          experience will find exactly the right partner for this venture in
          Premium Cars AG.
          <Box
            sx={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
            }}>
            <strong> Together we can offer you the following advantages</strong>
            <Typography marginTop={"10px"}>
              <ul>
                <li>• Experience in the rental and automotive sectors</li>
                <li>• Professional customer support</li>
                <li>• Technical know-how</li>
                <li>• Transparency and fairness</li>
                <li>• Flexibility</li>
                <li>• Own vehicles</li>
              </ul>
            </Typography>
          </Box>
          Whether you just want to buy or rent your dream sports car for an
          hour, a day, for the weekend, for a wedding, as a birthday present or
          are interested in long-term rental, we offer you unbeatable value for
          money and individual rental at any time, at any time place in
          Switzerland. Market-driven prices, transparency, fairness and new and
          well-maintained vehicles round off our overall package. Get to know
          our passion and experience what it's all about.
        </Typography>
        <Typography variant="h5" marginTop={"10px"} color={"gold"}>
          We look forward to see you!
        </Typography>
      </Box>
      <Box marginTop="20px">
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={() => navigate("/all-cars")}
          endIcon={<SendIcon />}>
          Let us Drive You to Our Shop
        </Button>
      </Box>
    </Container>
  );
};

export default AboutUs;
