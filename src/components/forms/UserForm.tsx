import React from "react";
import InputWithLabel from "./InputWithLabel";

function UserForm() {
  return (
    <>
      <InputWithLabel
        label="First Name"
        inputType="text"
        inputName="firstName"
      />
      <InputWithLabel label="Last Name" inputType="text" inputName="lastName" />
    </>
  );
}

export default UserForm;
