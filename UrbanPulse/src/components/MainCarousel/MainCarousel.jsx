import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={one} onDragStart={handleDragStart} role="presentation" />,
  <img src={two} onDragStart={handleDragStart} role="presentation" />,
  <img src={three} onDragStart={handleDragStart} role="presentation" />,
  <img src={four} onDragStart={handleDragStart} role="presentation" />,
];

export const MainCarousel = () => (
  <>
  <div className="pb-4">

    <AliceCarousel
      autoPlay={true}
      autoPlayInterval={4000}
      disableButtonsControls
      disableDotsControls
      items={items}
      infinite
    />
  </div>
  </>
);
