import React from "react";
import "./Slider.css";
import { Carousel } from "react-carousel-minimal";

export default function Slider() {
  const data = [
    {
      image: "/images/coda.jpg",
      caption: "Coda 2021",
    },
    {
      image: "images/kingrichard.jpg",
      caption: "King Richard 2021",
    },
    {
      image: "images/Drive-My-Car-Oscar.jpg",
      caption: "Drive My Car 2021",
    },
    {
      image: "images/hero-2021.jpg",
      caption: "Hero 2021",
    },
    {
      image: "images/summerofsoul_banner.jpg",
      caption: "Summer of Soul 2021",
    },
    {
      image: "images/theeyeoftammyfaye.jpg",
      caption: "The Eye Of Tammy Faye 2021",
    },
    {
      image: "images/encanto.jpg",
      caption: "Encanto 2021",
    },
    {
      image: "images/The-Power-Of-The-Dog.jpg",
      caption: "The Power of The Dog 2021",
    },
    {
      image: "images/tcs-film-west-side-story-poster.jpg",
      caption: "West Side Story 2021",
    },
    {
      image: "images/maxresdefault.jpg",
      caption: "No Time To Die 2021",
    },
    {
      image: "images/belfast.jpg",
      caption: "Belfast 2021",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "Fredoka",
  };
  const slideNumberStyle = {
    fontSize: "14px",
    fontWeight: "bold",
  };
  return (
    <div className="vasat">
      <h2>Oscar Winners (2022) </h2>
      <Carousel
        data={data}
        time={1100}
        width="100%"
        height="350px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "90%",
          maxHeight: "500px",
          margin: "10px auto 5px auto",
        }}
      />
    </div>
  );
}
