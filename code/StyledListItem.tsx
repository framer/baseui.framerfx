import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledListItem";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledListItem: React.SFC = props => {
  return <System.StyledListItem {...props} style={style} />;
};

export const StyledListItem = withHOC(InnerStyledListItem);

StyledListItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledListItem, {});