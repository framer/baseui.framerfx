import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledToggleInner";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledToggleInner: React.SFC = props => {
  return <System.StyledToggleInner {...props} style={style} />;
};

export const StyledToggleInner = withHOC(InnerStyledToggleInner);

StyledToggleInner.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledToggleInner, {});