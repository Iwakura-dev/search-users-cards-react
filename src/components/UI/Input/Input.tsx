import React from "react";
import type { InputProps } from "../../../types/interface.types";

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
