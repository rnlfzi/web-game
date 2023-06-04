import React from "react";
import { Row, Col, Button, Stack } from "react-bootstrap";

const Choice = ({ clickHandle, done }) => {
  const choices = ["batu", "gunting", "kertas"];

  return (
    <Row className="text-center">
      <Col className="d-grid justify-content-center">
        <Stack direction="horizontal" gap={4}>
          {choices.map((item, i) => (
            <Button
              id="choiceBar"
              key={i}
              className="rounded p-3 bg-transparent"
              onClick={() => clickHandle(item)}
              disabled={done ? true : false}
            >
              <img
                style={{ height: "50px" }}
                src={`/images/${item}.png`}
                alt={item}
              />
            </Button>
          ))}
        </Stack>
      </Col>
    </Row>
  );
};

export default Choice;
