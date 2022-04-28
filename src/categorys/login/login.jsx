import React from "react";

import { Formik, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import sign_up from "../login/sign_up.jsx";

class Login extends React.Component {
  onSubmit = (values) => {
    console.log(values);
  };

  form = (props) => {
    return (
      <form className="form-login" onSubmit={props.handleSubmit}>
        <h2> تسجيل الدخول</h2>
        <div className="fielder">
          <div>
            <label htmlFor="form-email">البريد الالكتروني</label>
            <Field
              name="email"
              type="email"
              id="form-email"
              placeholder="برجاء ادخل البريد الالكتروني"
            />
          </div>
          <h3 className="ErrorEmail">
            <ErrorMessage name="email" />{" "}
          </h3>
          <div>
            <label htmlFor="form-password">كلمه المرور</label>
            <Field
              name="password"
              type="password"
              id="form-password"
              placeholder="برجاء ادخل كلمه المرور"
            />
          </div>
          <h3 className="ErrorPassword">
            {" "}
            <ErrorMessage name="password" />
          </h3>
          <div className="row">
            <div className="selector">
              <label htmlFor="form-checkbox">
                <Field
                  name="checkbox"
                  type="checkbox"
                  id="form-checkbox"
                  placeholder=""
                />
                تذكرني
              </label>
            </div>
            <div className="column2">هل نسيت كلمه المرور ؟</div>
          </div>
        </div>
        <button type="submit">تسجيل الدخول</button>
        <h4>
          <a href="../login/sign_up.jsx">ليس لديك حساب ؟ </a>
        </h4>
      </form>
    );
  };

  schema = () => {
    const schema = Yup.object().shape({
      email: Yup.string().required(" من فضلك ادخل بريد صحيح").email(),
      password: Yup.number().required(),
    });
    return schema;
  };

  render() {
    return (
      <div className="form-login">
        <Formik
          initialValues={{ email: "", password: "", checkbox: true }}
          onSubmit={this.onSubmit}
          render={this.form}
          validationSchema={this.schema()}
          // onSubmit={async (values, { resetForm }) => {
          //   await onSubmit(values);
          //   resetForm();
          // }}
        />
      </div>
    );
  }
}

export default Login;
