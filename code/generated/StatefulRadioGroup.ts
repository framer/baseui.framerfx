// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  children: ControlDescription;
  autoFocus: ControlDescription;
  name: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", type: ControlType.String },
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
  name: { title: "Name", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
