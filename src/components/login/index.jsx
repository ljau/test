import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ErrorText, Input } from "./styled";

export const InputField = ({
  handleChange,
  handleBlur,
  value,
  errors,
  touched,
  type,
  name,
  placeholder,
  id,
}) => {
  return (
    <div>
      <Input
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder={placeholder}
        id={id}
      />
      <ErrorText>{errors && touched && errors}</ErrorText>
    </div>
  );
};

export const PrivateRoute = () => {
  const auth = !!sessionStorage.getItem("tk");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export const OnlyVisitor = () => {
  const auth = !sessionStorage.getItem("tk");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
