import React from "react";
import { Container } from "react-bootstrap";
import {
  SiWhatsapp,
  SiGithub,
  SiInstagram,
  SiGmail,
  SiTiktok,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { itemFooter } from "../../utils/data";

const Footer = () => {
  const icons = [
    <SiGmail />,
    <SiInstagram />,
    <SiWhatsapp />,
    <SiGithub />,
    <SiTiktok />
  ]

  return (
    <Container
      fluid
      className="text-center py-2"
      style={{ backgroundColor: "#2E4F4F", minHeight: "350px" }}
    >
      <div className="d-flex justify-content-center gap-5 mb-3">
        <div className=" d-flex gap-2">
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
        </div>
        <div className="d-flex gap-4 align-items-center border-bottom">
          {icons.map((icon, i) => (
            <Link key={i} id="sosmed" className="nav-link">
              {icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center gap-4">
        {itemFooter.map((item, i) => (
          <Link key={i} id="link" className="nav-link" to={item?.link}>{item?.label}</Link>
        ))}
      </div>
    </Container>
  );
};

export default Footer;
