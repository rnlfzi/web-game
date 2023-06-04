import React from "react";
import { Stack, Button, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = ({ detail }) => {
  const navigate = useNavigate();
  return (
    <>
      <Col lg={9}>
        <Stack>
          <h2 style={{ fontSize: "60px" }}>{detail?.name}</h2>
          <p style={{ color: "#0E8388", fontSize: "15px" }}>{detail?.name}</p>
          <Stack direction="horizontal" gap={4}>
            <p className="fw-bold">
              {detail?.review}
              <br />
              <span style={{ color: "#0E8388", fontSize: "12px" }}>
                reviews
              </span>
            </p>
            <p className="fw-bold">
              {detail?.totalPlay}
              <br />
              <span style={{ color: "#0E8388", fontSize: "12px" }}>
                downloads
              </span>
            </p>
            <p className="fw-bold">{detail?.genre}</p>
          </Stack>
          <Button
            onClick={() => navigate("/games/start")}
            id="btnGame"
            className="w-100 mb-sm-5 bg-transparent"
            disabled={detail?.play === true ? false : true}
          >
            Play Now
          </Button>
        </Stack>
      </Col>
      <Col className="px-1 d-none d-sm-flex justify-content-center">
        <Card style={{ maxWidth: "250px" }} className="border-0 bg-transparent">
          <Card.Img src={detail?.cover} alt={detail?.name} />
        </Card>
      </Col>
    </>
  );
};

export default Header;
