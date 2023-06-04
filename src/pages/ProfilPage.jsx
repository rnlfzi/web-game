import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Bgc from "../components/auth/Bgc";
import Player from "../components/profile/Player";
import Detail from "../components/profile/Detail";
import History from "../components/profile/History";
import { useDispatch, useSelector } from "react-redux";
import { data, getPlayer } from "../redux/players/reducer";

const ProfilPage = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector(data);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(getPlayer(userId))
  }, [dispatch, userId])

  console.log(detail)

  return (
    <>
      <Container>
        <Row>
          <Player detail={detail} />
        </Row>
        <Row>
          <Detail detail={detail} />
          <History />
        </Row>
      </Container>
      <Bgc />
    </>
  );
};

export default ProfilPage;
