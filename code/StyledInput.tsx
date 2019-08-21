import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledInput";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledInput: React.SFC = props => {
  return <System.StyledInput {...props} style={style} />;
};

export const StyledInput = withHOC(InnerStyledInput);

StyledInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledInput, {});
