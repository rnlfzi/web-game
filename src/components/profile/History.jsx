import React from 'react'
import { Col, Stack } from 'react-bootstrap'

const History = () => {
  return (
    <Col className="my-3">
      <Stack
        style={{
          height: 500,
          backgroundColor: "#1d26268d",
          overflowY: "scroll",
          backdropFilter: "blur(5px)",
        }}
        gap={3}
        className="rounded-4 py-4 px-5"
      >
        <h1>History</h1>
        <Stack
          id="rank"
          direction="horizontal"
          className="rounded py-2 px-3"
        >
          <p className="my-auto me-auto">RPS</p>
          <p className="my-auto">15 pts</p>
        </Stack>
        <Stack
          id="rank"
          direction="horizontal"
          className="rounded py-2 px-3"
        >
          <p className="my-auto me-auto">RPS</p>
          <p className="my-auto">15 pts</p>
        </Stack>
        <Stack
          id="rank"
          direction="horizontal"
          className="rounded py-2 px-3"
        >
          <p className="my-auto me-auto">RPS</p>
          <p className="my-auto">15 pts</p>
        </Stack>
        <Stack
          id="rank"
          direction="horizontal"
          className="rounded py-2 px-3"
        >
          <p className="my-auto me-auto">RPS</p>
          <p className="my-auto">15 pts</p>
        </Stack>
      </Stack>
    </Col>
  )
}

export default History