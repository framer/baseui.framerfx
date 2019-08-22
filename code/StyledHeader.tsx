import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledHeader";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledHeader: React.SFC = props => {
  return <System.StyledHeader {...props} style={style} />;
};

export const StyledHeader = withHOC(InnerStyledHeader);

StyledHeader.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledHeader, {});