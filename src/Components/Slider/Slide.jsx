import React from "react";

export default function Slide({ slide, slidenum }) {
  return (
    <div className="mySlides fade" style={{ display: "block" }}>
      <div className="numbertext">{slidenum + 1} / 3</div>
      <img src={slide.img} style={{ width: "100%" }} />
      <div className="text">{slide.slidename}</div>
    </div>
  );
}
