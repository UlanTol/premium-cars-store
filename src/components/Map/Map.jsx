import React from "react";

const Map = () => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "right",
        width: "100%",
        height: "90vh",
      }}>
      <div
        class="gmap_canvas"
        style={{
          overflow: "hidden",
          background: "none!important",
          width: "100%",
          height: "90vh",
        }}>
        <iframe
          style={{ height: "90vh" }}
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=1191&amp;height=646&amp;hl=en&amp;q=55 school&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        <a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">
          FNF Mods
        </a>
      </div>
    </div>
  );
};

export default Map;
