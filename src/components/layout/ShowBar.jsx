import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";
import Lottie from "lottie-react";
import anim from "../../assets/anim/anim.json";
import { useNavigate } from "react-router-dom";

const ShowBar = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (link) => {
    setShow(false)

    navigate(link)
  }

  return (
    <>
      <Button
        style={{ backgroundColor: "#0E8388", color: "#CBE4DE" }}
        className=" rounded-pill d-flex align-items-center gap-1 border-0"
        onClick={handleShow}
        id="btnIn"
      >
        <MdAccountCircle /> Masuk
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" id="show">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <h1 id="logo" className="fs-5 my-auto">
              easzy
              <br />
              games
            </h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=" d-grid gap-3">
          <Lottie animationData={anim} loop={true} />
          <Button
            className=" rounded-pill border-0"
            id="btnReg"
            onClick={() => handleClick("/register")}
          >
            Buat Akun
          </Button>
          <Button
            className=" rounded-pill"
            id="btnLog"
            onClick={() => handleClick("/login")}
          >
            Masuk
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShowBar;
