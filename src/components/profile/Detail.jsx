import React from "react";
import { Col, Stack } from "react-bootstrap";

const Detail = ({ detail }) => {
  return (
    <Col className="mt-5 pt-5" lg={4}>
      <Stack
        style={{ backgroundColor: "#354242b4" }}
        className="p-4 rounded"
        gap={3}
      >
        <Stack direction="horizontal" gap={3}>
          <p style={{ color: "#0E8388" }} className="my-auto fw-bold">
            Nama :
          </p>
          <p className="my-auto">{detail?.name}</p>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <p style={{ color: "#0E8388" }} className="my-auto fw-bold">
            Alamat :
          </p>
          <p className="my-auto">{detail?.address}</p>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <p style={{ color: "#0E8388" }} className="my-auto fw-bold">
            Negara :
          </p>
          <p className="my-auto">{detail?.country}</p>
        </Stack>
      </Stack>
    </Col>
  );
};

export default Detail;
