import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TriangleRight";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTriangleRight: React.SFC = props => {
  return <System.TriangleRight {...props} style={style} />;
};

export const TriangleRight = withHOC(InnerTriangleRight);

TriangleRight.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TriangleRight, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
