import React from "react";
import { Row, Col } from "react-bootstrap";
import Lottie from "lottie-react";
import anim from "../../assets/anim/load.json";

const Show = ({ choice, round, info, isDone }) => {
  return (
    <Row className="text-center my-5">
      <Col>
        <h1 className=" mb-4 text-uppercase">user</h1>
        {choice !== "" ? (
          <img
            id="choice"
            style={{ height: "250px" }}
            src={`/images/${choice}.png`}
            alt={choice}
          />
        ) : (
          <Lottie
            style={{ height: "250px" }}
            animationData={anim}
            loop={true}
          />
        )}
      </Col>
      <Col className="d-grid">
        <h2 className=" fw-bold text-warning my-auto">
          {round === 0
            ? "Mulai"
            : isDone === true
            ? "Round Selesai"
            : `Round ${round}`}
        </h2>
        <h1 id="vs" className=" text-warning my-auto">
          VS
        </h1>
        <h2 className=" text-uppercase fw-bold text-warning my-auto">
          {info === null ? "-" : `${info?.result}`}
        </h2>
      </Col>
      <Col>
        <h1 className=" mb-4 text-uppercase">comp</h1>
        {info !== null ? (
          <img
            id="choice"
            style={{ height: "250px" }}
            src={`/images/${info?.comp}.png`}
            alt={info?.comp}
          />
        ) : (
          <Lottie
            style={{ height: "250px" }}
            animationData={anim}
            loop={true}
          />
        )}
      </Col>
    </Row>
  );
};

export default Show;
