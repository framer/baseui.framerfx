import * as React from "react";
import * as System from "baseui/button";
import { ControlType, PropertyControls, addPropertyControls, ControlDescription, EnumControlDescription } from "framer";
import { controls, merge } from "./generated/Button";
import { withHOC } from "./withHOC";
import { ThemePropertyControl } from "./utils/PropertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerButton: React.SFC = props => {
  let filteredProps = {...props} as any;
  delete filteredProps.willChangeTransform;
  return (
    <System.Button {...filteredProps} style={style}>
      Button
    </System.Button>
  );
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 200,
  height: 50,
  disabled: false,
  isLoading: false,
  isSelected: false,
  kind: System.KIND.primary,
  overrides: {},
  shape: System.SHAPE.default,
  size: System.SIZE.default,
};

addPropertyControls(Button, {
  href: merge(controls.href, {}),
  target: merge(controls.target, {}),
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  endEnhancer: merge(controls.endEnhancer, {}),
  isLoading: merge(controls.isLoading, {}),
  isSelected: merge(controls.isSelected, {}),
  kind: merge(controls.kind, {}),
  shape: merge(controls.shape, {}),
  size: merge(controls.size, {}),
  startEnhancer: merge(controls.startEnhancer, {}),
  type: merge(controls.type, {}),
  ...ThemePropertyControl
});