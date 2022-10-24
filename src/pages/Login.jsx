import React from "react";
import {
  ButtonSubmit,
  FormContainer,
  LayoutLogin,
} from "../components/login/styled";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputField } from "../components/login";
import { useNavigate } from "react-router-dom";


const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid format for email"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters long"),
});

const Login = () => {
  const navigate = useNavigate();
  return (
    <LayoutLogin>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          if (values.email && values.password) {
            sessionStorage.setItem("tk", values.email);
            navigate("/");
          }
          return;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <FormContainer noValidate onSubmit={handleSubmit}>
            <InputField
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              errors={errors.email}
              touched={touched.email}
              type="email"
              name="email"
              placeholder="Email"
              id="email"
            />
            <InputField
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              errors={errors.password}
              touched={touched.password}
              type="password"
              name="password"
              placeholder="Password"
              id="password"
            />
            <ButtonSubmit
              type="submit"
              value="Log In"
             
            />
          </FormContainer>
        )}
      </Formik>
    </LayoutLogin>
  );
};

export default Login;
