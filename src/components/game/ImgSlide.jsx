import React from "react";
import { Carousel } from "react-bootstrap";

const ImgSlide = ({ images }) => {
  return (
    <>
      <h1>Preview Game</h1>
      <Carousel id="item">
        {images?.map((item, i) => (
          <Carousel.Item key={i} interval={1000}>
            <img
              className="d-block w-100 rounded"
              src={item?.url}
              alt={`img-${i}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ImgSlide;
