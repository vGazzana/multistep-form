import React from "react";
import InputWithLabel from "./InputWithLabel";
import FormWrapper from "./FormWrapper";

function AdressForm() {
  return (
    <FormWrapper title="Adress">
      <InputWithLabel label="Country" inputName="country" />
      <InputWithLabel label="State" inputName="state" />
      <InputWithLabel label="City" inputName="city" />
      <InputWithLabel label="Zip" inputName="zip" />
    </FormWrapper>
  );
}

export default AdressForm;
