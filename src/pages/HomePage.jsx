import React, { useEffect } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bgc from "../components/auth/Bgc";
import { data, getGames } from "../redux/games/reducer";

const HomePage = () => {
  const games = useSelector(data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames())
  }, [dispatch])

  const canPlay = games?.find((row) => row.play === true);
  const cantPlay = games?.filter((row) => row.play !== true);
  // const filter = cantPlay.filter((row) => row.name?.toLowerCase().includes(keyword.toLowerCase()))

  return (
    <>
      <Container className=" px-4 px-sm-0 my-4 d-grid gap-4">
        <Row>
          <h1 className=" fs-5">Top Games</h1>
          <Col sm={4} md={3} lg={2} className="px-1">
            <Card className=" border-0 bg-transparent" id="games">
              <Link to={`/games/${canPlay?.id}`} className="nav-link">
                <Card.Img src={canPlay?.cover} alt={canPlay?.name} />
                <Stack
                  id="title"
                  className=" bg-transparent position-absolute m-2 px-2 rounded shadow"
                >
                  <h2 className=" fs-6 my-auto">{canPlay?.name}</h2>
                </Stack>
              </Link>
            </Card>
          </Col>
        </Row>
        <Row>
          <h1 className=" fs-5">Direkomendasikan untukmu</h1>
          {cantPlay.map((game, i) => {
            return (
              <Col key={i} sm={4} md={3} lg={2} className="px-1 mb-lg-0 mb-2">
                <Card className=" border-0 bg-transparent" id="games">
                  <Link to={`/games/${game?.id}`} className="nav-link">
                    <Card.Img src={game?.cover} alt={game?.name} />
                    <Stack
                      id="title"
                      className=" bg-transparent position-absolute m-2 px-2 rounded shadow"
                    >
                      <h2 className=" fs-6 my-auto">{game?.name}</h2>
                    </Stack>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Bgc />
    </>
  );
};

export default HomePage;
