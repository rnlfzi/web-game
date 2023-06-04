import React from "react";
import { Stack } from "react-bootstrap";
import { RPS } from "../../utils/data";

const AppBar = ({ point }) => {
  return (
    <Stack id="appBar" direction="horizontal" className="shadow-lg">
      <Stack direction="horizontal" gap={3}>
        <img
          style={{ width: "80px", borderRadius: "4px" }}
          src={RPS.cover}
          alt={RPS.judul}
        />
        <h1>{RPS.judul}</h1>
      </Stack>
      <Stack direction="horizontal" className="ms-auto px-3">
        <h1>{`Point: ${point}`}</h1>
      </Stack>
    </Stack>
  );
};

export default AppBar;
