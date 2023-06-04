import React, { useState } from "react";
import {
  Container,
  Navbar,
  Form,
  Button,
  InputGroup,
  Nav,
} from "react-bootstrap";
import { MdOutlineSearch } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import ShowBar from "./ShowBar";
import Profile from "./Profile";

const Navigation = () => {
  const [change, setChange] = useState(false);
  const token = localStorage.getItem("token");
  const pathname = window.location.pathname;

  // window.addEventListener("scroll", () => {
  //   const Y = window.scrollY;

  //   if (Y > 0) setChange(true);
  //   else if (Y === 0) setChange(false);
  // });

  return (
    <Navbar
      style={{ backgroundColor: change === false ? "#2E4F4F" : "#2e4f4f84" }}
      sticky="top"
      variant="dark"
      onScroll={() => setChange(true)}
      id="navigation"
    >
      <Container>
        <Link to="/" className=" nav-link">
          <Navbar.Brand className="d-flex gap-2 align-items-center">
            <img
              alt=""
              src={require("../../assets/icons/console.ico")}
              width="50"
              height="50"
            />
            <h1 id="logo" className="fs-5 my-auto">
              easzy
              <br />
              games
            </h1>
          </Navbar.Brand>
        </Link>
        { pathname === "/" && (
          <InputGroup className="d-none d-sm-flex">
            <Form.Control placeholder="Search Game" id="searchBar" />
            <Button id="searchBtn">
              <MdOutlineSearch size={"1.2rem"} />
            </Button>
          </InputGroup>
        )}
        <Nav>
          <Link to="/" className="d-flex align-items-center me-2 nav-link">
            <BiHome size={"1.5rem"} />
          </Link>
          <Link
            to="/leaderboard"
            className="d-flex align-items-center me-3 nav-link"
          >
            <IoGameController size={"1.5rem"} />
          </Link>

          {token ? <Profile /> : <ShowBar />}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
