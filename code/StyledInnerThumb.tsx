import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledInnerThumb";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledInnerThumb: React.SFC = props => {
  return <System.StyledInnerThumb {...props} style={style} />;
};

export const StyledInnerThumb = withHOC(InnerStyledInnerThumb);

StyledInnerThumb.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledInnerThumb, {});
