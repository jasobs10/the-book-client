import React from 'react';
import { CarouselIndex } from './carousel_index.jsx'
import '../../styles/shared/carousel.css'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.displayLength = props.displayLength;
    this.carouselItems = props.carouselItems;
    this.totalSlides = props.carouselItems.length;
    this.state = {
      currentSlide: 0,
    }
    this.isAutoScroll = props.autoScroll
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.updateSlide = this.updateSlide.bind(this);
    this.interval = null;
    this.isAutoScroll = this.props.isAutoScroll;
  }

  componentWillUnmount() {
    this.resetInterval();
  }

  componentDidMount() {
    this.setAutoScroll();
  }

  nextSlide() {
    if (this.state.currentSlide < this.totalSlides - 1) {
      this.setState({currentSlide: this.state.currentSlide + 1});
    } else if (this.state.currentSlide >= this.totalSlides - 1) {
      this.setState({currentSlide: 0});
    }
    this.restartInterval();
  }

  previousSlide() {
    if (this.state.currentSlide > 0) {
      this.setState({currentSlide: this.state.currentSlide - 1});
    } else if (this.state.currentSlide <= 0) {
      this.setState({currentSlide: this.totalSlides - 1});
    }
    this.restartInterval();
  }

  restartInterval() {
    this.resetInterval();
    this.setAutoScroll();
  }

  updateSlide(index) {
    this.setState({currentSlide: index});
    this.restartInterval();
  }

  renderItems(index) {
    // put while loop here
    const currentItem = this.carouselItems[this.state.currentSlide];
    return (
      <div className="slide-item">
        <div className="carousel-img-wrapper">
          {currentItem}
        </div>
      </div>
    );
  }

  resetInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  setAutoScroll() {
    if (this.isAutoScroll) {
      this.interval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    }
  }

  render() {
    return (
      <div className="carousel-container">
        <div className="next" onClick={this.nextSlide}>&gt;</div>
        <div className="prev" onClick={this.previousSlide}>&lt;</div>
        <div className={"carousel-items"}>
          {this.renderItems()}
          <CarouselIndex
            updateSlide={this.updateSlide}
            currentSlide={this.state.currentSlide}
            totalSlides={this.totalSlides}
          >
          </CarouselIndex>
        </div>
      </div>
    )
  }
}

export default Carousel;
