import React from "react";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Lottie from "lottie-react";
import anim from "../assets/anim/register.json";
import Bgc from "../components/auth/Bgc";
import RegisterInput from "../components/auth/RegisterInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/auth/reducer";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (payload) => {
    dispatch(register(payload));

    setTimeout(() => {
      navigate("/login")
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
            <RegisterInput handleClick={handleClick} />
          </Col>
        </Row>
      </Container>
      <Bgc />
    </>
  );
};

export default RegisterPage;
