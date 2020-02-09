import React from "react";
import {
  FormInputPageComponent,
  InputComponent,
  InputLabelComponent
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormInputPageComponent>
    <InputComponent onChange={handleChange} {...otherProps} />

    {//if label is true pass labels else null
    label ? (
      <InputLabelComponent
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </InputLabelComponent>
    ) : null}
  </FormInputPageComponent>
);

export default FormInput;
