import React from "react";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Lottie from "lottie-react";
import anim from "../assets/anim/login.json";
import Bgc from "../components/auth/Bgc";
import LoginInput from "../components/auth/LoginInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/reducer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (payload) => {
    dispatch(login(payload));

    setTimeout(() => {
      navigate("/")
    }, 1000)
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Lottie animationData={anim} loop={true} />
          </Col>
          <Col lg={5} md={6} className="d-flex">
            <LoginInput handleClick={handleClick} />
          </Col>
        </Row>
      </Container>
      <Bgc />
    </>
  );
};

export default LoginPage;
