import React from 'react';
import '../../styles/shared/carousel.css'

const setItems = (totalSlides, currentSlide, updateSlide) => {
  const itemArray = [];
  for (let i = 0; i < totalSlides; i++) {
    const currentItem = currentSlide === i ? 'highlighted' : '';
    itemArray.push(
      <div className={`carousel-index-item ${currentItem}`} onClick={() => updateSlide(i)} key={i}></div>
    )
  }
  return itemArray;
}

export const CarouselIndex = (props) => {
  return (
    <div className="carousel-index">
      {setItems(props.totalSlides, props.currentSlide, props.updateSlide)}
    </div>
  )
}
