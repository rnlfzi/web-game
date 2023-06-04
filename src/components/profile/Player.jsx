import React from "react";
import { Stack, Col } from "react-bootstrap";
import image from "../../assets/images/bg.jpg";

const Player = ({ detail }) => {
  return (
    <Col>
      <img
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          borderRadius: "0 0 15px 15px",
        }}
        src={image}
        alt="bg"
      />
      <img
        style={{ position: "absolute", top: 300, left: 150 }}
        className="rounded-circle"
        src={`https://ui-avatars.com/api/?name=${detail?.username}&background=random&size=150`}
        alt="profile avatar"
      />
      <Stack style={{ position: "absolute", top: 325, left: 325 }}>
        <h1>{detail?.username}</h1>
        <p style={{ color: "#0E8388" }}>{detail?.email}</p>
      </Stack>
    </Col>
  );
};

export default Player;
