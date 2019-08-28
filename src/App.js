import React from "react";

import { withFormik } from "formik";
import yup from "yup";

function App({ values, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={values.passwords}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
export default withFormik({
  mapPropsToValues({ email = "asdfasf", password = "" }) {
    return {
      email: email,
      password: password
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(App);
