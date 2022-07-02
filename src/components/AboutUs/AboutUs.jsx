import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ marginTop: "50px" }}>
      <Box>
        <Typography variant="h4">ABOUT US</Typography>
      </Box>

      <Box sx={{ marginTop: "30px" }}>
        <Typography variant="h6">
          Sports cars are our passion - and because we would like to share this
          feeling with you, we founded Luxury Scuderia AG in 2013. Our vision is
          clear: to give everyone the opportunity to rent "their" sports car -
          and do it flexibly, affordably and with the greatest possible customer
          orientation. There are many dreams in life that are very difficult to
          achieve. But there are also long-cherished wishes that can be
          implemented without much effort. Driving in a luxury sports car in
          particular belongs in this category. Anyone interested in such an
          experience will find exactly the right partner for this venture in
          Luxury Scuderia AG. Together we can offer you the following advantages
          • Experience in the rental and automotive sectors • Professional
          customer support • Technical know-how • Transparency and fairness •
          Flexibility • Own vehicles Whether you just want to rent your dream
          sports car for an hour, a day, for the weekend, for a wedding, as a
          birthday present or are interested in long-term rental, we offer you
          unbeatable value for money and individual rental at any time, at any
          time place in Switzerland. Market-driven prices, transparency,
          fairness and new and well-maintained vehicles round off our overall
          package. Get to know our passion and experience what it's all about.
        </Typography>
        <Typography variant="h5">We look forward to you!</Typography>
      </Box>
      <Box marginTop="30px">
        <Button color="secondary" onClick={() => navigate("/cars")}>
          Choose a Car
        </Button>
      </Box>
    </Container>
  );
};

export default AboutUs;
