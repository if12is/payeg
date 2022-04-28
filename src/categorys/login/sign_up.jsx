import React from "react";

import login from "../login/login.jsx";

class sign_up extends React.Component {
  render() {
    return (
      <div className="form-login">
        <form className="form-login">
          <h2> تسجيل الدخول</h2>
          <div className="fielder">
            <div>
              <label htmlFor="form-email">البريد الالكتروني</label>
              <input
                type="email"
                id="form-email"
                placeholder="برجاء ادخل البريد الالكتروني"
              />
            </div>
            <div>
              <label htmlFor="form-password">كلمه المرور</label>
              <input
                type="password"
                id="form-phone"
                placeholder="برجاء ادخل كلمه المرور"
              />
            </div>
            <div>
              <label htmlFor="form-phone">رقم الهاتف</label>
              <input
                type="text"
                id="form-phone"
                placeholder="برجاء ادخل رقم الهاتف"
              />
            </div>
            <div className="row">
              <div className="selector">
                <label htmlFor="form-checkbox">
                  <input type="checkbox" id="form-checkbox" placeholder="" />
                  تذكرني
                </label>
              </div>
              <div className="column2">هل نسيت كلمه المرور ؟</div>
            </div>
          </div>
          <button type="submit">تسجيل الدخول</button>
          <h4>
            {" "}
            <a href={login}>هل لديك حساب بالفعل ؟ </a>{" "}
          </h4>
        </form>
      </div>
    );
  }
}

export default sign_up;
