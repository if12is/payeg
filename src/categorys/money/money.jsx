import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import CIB from "../img/CIB.png";
import QNB from "../img/QNB.png";
import elahly from "../img/elahly.png";
import egypt from "../img/egypt.png";

const Gallery = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="carousle">
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>
        <Item>
          {" "}
          <img src={CIB} width="200px" key={CIB} alt={CIB} />{" "}
        </Item>
        <Item>
          {" "}
          <img src={QNB} width="200px" key={QNB} alt={QNB} />{" "}
        </Item>
        <Item>
          {" "}
          <img src={elahly} width="200px" key={elahly} alt={elahly} />{" "}
        </Item>
        <Item>
          {" "}
          <img src={egypt} width="200px" key={egypt} alt={egypt} />{" "}
        </Item>
        <Item>
          {" "}
          <img src={CIB} width="200px" key={CIB} alt={CIB} />{" "}
        </Item>
        <Item>
          {" "}
          <img src={QNB} width="200px" key={QNB} alt={QNB} />{" "}
        </Item>
        <Item>
          {" "}
          <img src={elahly} width="200px" key={elahly} alt={elahly} />{" "}
        </Item>
        <Item>
          {" "}
          <img src={egypt} width="200px" key={egypt} alt={egypt} />{" "}
        </Item>
      </Carousel>
    </div>
  );
};

export default Gallery;
