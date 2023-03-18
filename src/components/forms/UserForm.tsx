import React from "react";
import InputWithLabel from "./InputWithLabel";
import FormWrapper from "./FormWrapper";

function UserForm() {
  return (
    <FormWrapper title="User">
      <InputWithLabel
        label="First Name"
        inputType="text"
        inputName="firstName"
      />
      <InputWithLabel label="Last Name" inputType="text" inputName="lastName" />
    </FormWrapper>
  );
}

export default UserForm;
