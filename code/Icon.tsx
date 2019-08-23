import BaseUiIcon from "baseui/icon/icon";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerIcon: React.SFC = props => {
  return <BaseUiIcon {...props} style={style} />;
};

export const Icon = withHOC(InnerIcon);

Icon.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(Icon, {
  color: { type: ControlType.Color, defaultValue: "#121212" }
});
