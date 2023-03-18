import React from "react";
import InputWithLabel from "./InputWithLabel";
import FormWrapper from "./FormWrapper";

function AccountForm() {
  return (
    <FormWrapper title="Account">
      <InputWithLabel label="Email" inputName="email" />
      <InputWithLabel
        label="Password"
        inputName="password"
        inputType="password"
      />
    </FormWrapper>
  );
}

export default AccountForm;
