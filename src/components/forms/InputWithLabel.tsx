import React from "react";

interface Props {
  label: string;
  inputType?: string;
  inputName: string;
}

function InputWithLabel({ label, inputType = "text", inputName }: Props) {
  return (
    <div>
      <label>{label}</label>
      <input type={inputType} name={inputName} required />
    </div>
  );
}

export default InputWithLabel;
