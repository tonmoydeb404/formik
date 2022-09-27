import { ErrorMessage } from "formik";
import React from "react";

const ErrorProvider = ({ name }) => {
  return (
    <p className="error_message">
      <ErrorMessage name={name} />
    </p>
  );
};

export default ErrorProvider;
