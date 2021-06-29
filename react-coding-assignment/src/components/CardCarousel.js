import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";


const CardCarousel = (props) => {
  let imageCardArr = props.casroseldata ?  props.casroseldata : [{"key": '', "description": '', 'headline': '', 'image': ''}];
  const renderCard = () => (
    imageCardArr.map(data => (
    <Card
    key= {data.key}
    description= {data.description}
    headline= {data.headline}
    image= {data.image}
  />
  ))
  )
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={props ? props.resp : false}
        showDots={props ? props.requireDots : false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {
      renderCard()
        }

      </Carousel>
    </>
  ) 
};

export default CardCarousel;
