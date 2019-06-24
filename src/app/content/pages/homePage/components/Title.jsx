import React from "react";
import HeroButton from "../../../components/components/buttons/HeroButton";

export default function Title() {
  return (
    <div className="hero--title">
      <h1>Let's Go!</h1>
      <h3>Custom Built Websites for SME's &amp; Sole Traders</h3>
      <small>
        With so much of today’s modern technology ruling the smallest details of
        our lives, getting your website and digital strategy right is just too
        important to be done in half measures.
      </small>
      <HeroButton linkTo="/about" content="Ok, I'm Ready!" />
    </div>
  );
}
