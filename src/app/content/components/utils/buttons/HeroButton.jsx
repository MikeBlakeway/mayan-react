import React from "react";
import { Link } from "react-router-dom";

export default function HeroButton(props) {
  return (
    <div className="hero--button">
      <button>
        <Link to={props.linkTo}>{props.content}</Link>
      </button>
      <span className="arrow-right">
        <span />
      </span>
    </div>
  );
}
