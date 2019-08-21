import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledSingleValue";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledSingleValue: React.SFC = props => {
  return <System.StyledSingleValue {...props} style={style} />;
};

export const StyledSingleValue = withHOC(InnerStyledSingleValue);

StyledSingleValue.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledSingleValue, {});
