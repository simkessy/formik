import React from "react";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function App({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Enter email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Enter Password" />
      </div>
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
      </label>
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
}
export default withFormik({
  mapPropsToValues({
    email = "asdfasf",
    password = "",
    newsletter = false,
    plan = "free"
  }) {
    return {
      email,
      password,
      newsletter,
      plan
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required(),
    password: Yup.string()
      .min(4, "Needs more")
      .required("Pass required")
  }),
  handleSubmit(values, { setErrors, setSubmitting, resetForm }) {
    setTimeout(params => {
      if (values.email === "simkessy@gmail.com") {
        setErrors({
          email: "Email is used"
        });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
    console.log(values);
  }
})(App);
