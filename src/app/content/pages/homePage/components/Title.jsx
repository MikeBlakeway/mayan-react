import React from "react";
import HeroButton from "../../../components/components/buttons/HeroButton";
import Glyphs from "../../../components/icons/Glyphs/Glyphs";
export default function Title() {
  return (
    <div className="hero--title">
      <Glyphs type="hero--glyphs" />
      <h1>MAYAN</h1>
      <h3>Website Design &amp; Development Studio</h3>
      <small>Bespoke Online Solutions For SME’s &amp; Sole Traders</small>

      <HeroButton linkTo="/about" content="Let's Go" />
    </div>
  );
}
