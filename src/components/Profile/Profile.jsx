import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div
      style={{
        backgroundImage:
          "url(https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/730/mercedes-benz_100730419.jpg)",
        backgroundSize: "cover",
        margin: "0 auto",
        backgroundColor: "white",
        color: "white",
        width: "100vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <img
        style={{ width: "10vw", borderRadius: "100px", marginTop: "22px" }}
        src={user.picture}
        alt={user.name}
      />
      <h2 style={{ color: "white" }}>{user.name}</h2>
      <p>{user.email}</p>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </div>
  );
};

export default Profile;
