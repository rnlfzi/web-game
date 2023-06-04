import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/game/Header";
import ImgSlide from "../components/game/ImgSlide";
import Bgc from "../components/auth/Bgc";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGame, reset } from "../redux/games/reducer";

const GamePage = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.games.detail);

  useEffect(() => {
    dispatch(reset())
    dispatch(getGame(gameId))
  }, [dispatch, gameId])

  return (
    <>
      <Container>
        <Row className="px-5 pt-5" >
          <Header detail={detail} />
        </Row>
        <Row className="p-5">
          <Col lg={9}>
            <ImgSlide images={detail?.image} />
          </Col>
        </Row>
      </Container>
      <Bgc />
    </>
  );
};

export default GamePage;
