// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer"

export type Controls = {
  adjoined: ControlDescription
  autoComplete: ControlDescription
  autoFocus: ControlDescription
  clearable: ControlDescription
  disabled: ControlDescription
  error: ControlDescription
  positive: ControlDescription
  id: ControlDescription
  name: ControlDescription
  placeholder: ControlDescription
  required: ControlDescription
  size: ControlDescription
  type: ControlDescription
  value: ControlDescription
  rows: ControlDescription
}

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  adjoined: {
    title: "Adjoined",
    options: ["none", "left", "right", "both"],
    optionTitles: ["None", "Left", "Right", "Both"],
    defaultValue: "none",
    type: ControlType.Enum,
  },
  autoComplete: {
    title: "AutoComplete",
    defaultValue: "",
    type: ControlType.String,
  },
  autoFocus: {
    title: "AutoFocus",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  clearable: {
    title: "Clearable",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  error: { title: "Error", defaultValue: false, type: ControlType.Boolean },
  positive: {
    title: "Positive",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String,
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean,
  },
  size: {
    title: "Size",
    options: ["default", "compact", "large"],
    optionTitles: ["Default", "Compact", "Large"],
    defaultValue: "default",
    type: ControlType.Enum,
  },
  type: { title: "Type", defaultValue: "", type: ControlType.String },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  rows: { title: "Rows", type: ControlType.Number },
}

export function merge(inferredControls: ControlDescription, overrides: {}): ControlDescription {
  return { ...inferredControls, ...overrides }
}
