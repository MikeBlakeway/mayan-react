import React, { Component } from "react";
import Slider from "react-slick";
import { Col } from "react-flexbox-grid";
import { NextArrow, PrevArrow } from "./components/CustomArrows";
import * as Slide from "./components/Slides";

export default class SlickCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOne: null,
      navTwo: null
    };
  }

  componentDidMount() {
    this.setState({
      navOne: this.sliderOne,
      navTwo: this.sliderTwo
    });
  }

  render() {
    const navOneSettings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "ease-in-out",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    const navTwoSettings = {
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "ease-in-out",
      arrows: false
    };

    return (
      <React.Fragment>
        <Col xs={12} md={8}>
          <Slider
            {...navOneSettings}
            asNavFor={this.state.navTwo}
            ref={slider => (this.sliderOne = slider)}
          >
            <Slide.BasicSnippet />
            <Slide.StaticSnippet />
            <Slide.DynamicSnippet />
            <Slide.FullStackSnippet />
          </Slider>
        </Col>
        <Col xs={12} md={10}>
          <Slider {...navTwoSettings} ref={slider => (this.sliderTwo = slider)}>
            <Slide.BasicPackage />
            <Slide.StaticPackage />
            <Slide.DynamicPackage />
            <Slide.FullStackPackage />
          </Slider>
        </Col>
      </React.Fragment>
    );
  }
}
