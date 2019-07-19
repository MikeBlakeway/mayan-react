import React, { Component } from "react";
import Title from "./components/Title";
// import Hero from "./components/Hero/Hero";
import TextParticles from "./components/textToParticles/TextParticles";
// import "./components/textToParticles/textToParticles";

export default class HomePage extends Component {
  render() {
    return (
      <section className="hero">
        <TextParticles />
        <Title />
      </section>
    );
  }
}
