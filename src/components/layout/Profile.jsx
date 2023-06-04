import React, { useState } from "react";
import { Offcanvas, Button, Stack } from "react-bootstrap";
import image from "../../assets/images/bgc.jpg";
import { BsPerson } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menus = [
    { icon: <FiEdit />, text: "Sunting profil", type: "btn" },
    { icon: <HiOutlineTrophy />, text: "Penghargaan", type: "btn" },
    { icon: <IoSettingsOutline />, text: "Pengaturan akun", type: "btn" },
  ];
  const username = localStorage.getItem("username")

  const onLogout = () => {
    localStorage.clear();

    navigate("/")
  }

  return (
    <>
      <Button
        className=" bg-transparent border-0 rounded-circle p-0"
        style={{ backgroundColor: "#0E8388", color: "#CBE4DE" }}
        onClick={handleShow}
        id="btnIn"
      >
        <img
          className="rounded-circle"
          src={`https://ui-avatars.com/api/?name=${username}&background=random&size=40`}
          alt="profile avatar"
        />
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
        <Offcanvas.Body className="p-0">
          <img
            style={{
              position: "fixed",
              top: 0,
              zIndex: -1,
              width: "100%",
              maxHeight: "180px",
            }}
            src={image}
            alt="bgc"
          />
          <img
            style={{ marginTop: "63px", marginLeft: "45px" }}
            className="rounded-circle"
            src={`https://ui-avatars.com/api/?name=${username}&background=random&size=100`}
            alt="profile avatar"
          />
          <Stack className="my-4 mx-5">
            <h1
              style={{ color: "#CBE4DE", fontSize: "30px", lineHeight: "15px" }}
            >
              {username}
            </h1>
            <p style={{ color: "#0E8388" }}>email@coba.com</p>
            <Stack gap={3}>
              <Link
                id="btnMenu"
                to="/profile"
                className="nav-link d-flex align-items-center gap-2"
              >
                <BsPerson /> Profilku
              </Link>
              {menus.map((menu, i) => (
                <Button
                  id="btnMenu"
                  key={i}
                  className="p-0 bg-transparent border-0 text-start d-flex align-items-center gap-2"
                >
                  {menu.icon} {menu.text}
                </Button>
              ))}
              <Button
                id="btnMenu"
                className="p-0 bg-transparent border-0 text-start d-flex align-items-center gap-2 mt-5"
                onClick={onLogout}
              >
                <HiOutlineLogout /> Keluar
              </Button>
            </Stack>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Profile;
