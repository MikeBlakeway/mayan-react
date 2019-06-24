import React from "react";
import IconOne from "./components/IconOne";
import IconTwo from "./components/IconTwo";
import IconThree from "./components/IconThree";

export default function Glyphs({ ...props }) {
  return (
    <div className={props.type}>
      <IconOne
        width={props.width || 125}
        height={props.height || 125}
        fill={props.fill || "#369BA1"}
        opacity={props.opacity || 0.3}
      />
      <IconTwo
        width={props.width || 125}
        height={props.height || 125}
        fill={props.fill || "#369BA1"}
        opacity={props.opacity || 0.3}
      />
      <IconThree
        width={props.width || 125}
        height={props.height || 125}
        fill={props.fill || "#369BA1"}
        opacity={props.opacity || 0.3}
      />
    </div>
  );
}
