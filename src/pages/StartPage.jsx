import React from "react";
import { Container } from "react-bootstrap";
import Bgc from "../components/auth/Bgc";
import GameSection from "../components/start/GameSection";

const StartPage = () => {
  return (
    <>
      <Container className="mb-5">
        <GameSection />
      </Container>
      <Bgc />
    </>
  );
};

export default StartPage;
