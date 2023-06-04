import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "lottie-react";
import anim from "../assets/anim/rank.json";
import { leaderboards } from "../utils/data";
import List from "../components/leaderboard/List";
import Bgc from "../components/auth/Bgc";

const LeaderboardPage = () => {
  const data = leaderboards.sort((a, b) => b.point - a.point);

  return (
    <>
      <Container className="my-4">
        <Row>
          <Col lg={4} className="my-auto">
            <Lottie
              style={{ maxWidth: "400px" }}
              animationData={anim}
              loop={true}
            />
          </Col>
          <Col>
            <List data={data} />
          </Col>
        </Row>
      </Container>
      <Bgc />
    </>
  );
};

export default LeaderboardPage;
