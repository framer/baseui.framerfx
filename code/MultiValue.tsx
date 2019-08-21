import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/MultiValue";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMultiValue: React.SFC = props => {
  return <System.MultiValue {...props} style={style} />;
};

export const MultiValue = withHOC(InnerMultiValue);

MultiValue.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MultiValue, {});
