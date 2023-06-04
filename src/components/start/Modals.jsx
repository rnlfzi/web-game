import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdFileDownloadDone, MdRefresh } from "react-icons/md"

const Modals = ({ done, point, reset }) => {
  const navigate = useNavigate();

  return (
    <Modal show={done} centered>
      <Modal.Header className=" border-0 shadow">
        <Modal.Title className=" mx-auto fw-bold">{point === 0 ? "Yah !!!" : "Selamat !!!"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">{`Point yang kamu dapatkan adalah ${point}`}</Modal.Body>
      <Modal.Footer className=" border-0">
        <Button id="btnRefresh" className=" bg-transparent rounded-pill" onClick={reset}>
          <MdRefresh />
        </Button>
        <Button
          style={{ backgroundColor: "#0E8388", color: "#CBE4DE" }}
          className=" border-0 rounded-pill"
          onClick={() => navigate("/games")}
        >
          <MdFileDownloadDone /> Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
