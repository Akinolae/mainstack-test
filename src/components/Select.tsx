/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CreatableSelect from "react-select/creatable";
import CheckboxOption from "./CheckboxOption";

interface SelectProps {
  controlProps?: object;
  valueContainerProps?: object;
  indicator?: object;
  menu?: object;
  label?: string;
  labelStyle?: React.CSSProperties;
  type?: string;
  [key: string]: any; // Optional: To allow additional props
}

const Select = (props: SelectProps) => {
  const controlProps = {
    height: "52px",
    background: "#EFF1F6",
    border: "none",
    borderRadius: "12px",
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      boxShadow: "none",
      borderColor: state.isFocused
        ? provided.borderColor
        : provided.borderColor,
      ...provided,
      ...controlProps,
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      ...props.valueContainerProps,
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      ...props.indicator,
    }),

    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    menu: (provided: any) => ({
      ...provided,
      ...props.menu,
    }),
  };

  return (
    <div>
      {!!props.label && (
        <label className="text-[16px] text-[#131316]" style={props.labelStyle}>
          {props.label}
        </label>
      )}
      <CreatableSelect
        className="rounded mt-2 no-outline-select"
        styles={customStyles}
        type={props.type}
        controlProps
        components={{ Option: CheckboxOption }}
        {...props}
      />
    </div>
  );
};

export default Select;
