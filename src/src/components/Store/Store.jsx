import { PhoneFilled } from "@ant-design/icons";
import React from "react";
import video from "../assets/video.mp4";
import PhoneCard from "../Card/Card";

const Store = () => {
  return (
    <div className="video">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
        <PhoneCard />
      </div>
    </div>
  );
};

export default Store;
