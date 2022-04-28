import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import money from "../img/money2.png";
import img1 from "../img/immms.png";
import img2 from "../img/pinterest.png";
import img3 from "../img/Linkedin.png";
import img4 from "../img/twitter.png";
import img5 from "../img/facebook.png";
import logo from "../img/logo.jpg";

class ContactUs_footer extends Component {
  render() {
    return (
      <div class="contactUs_footer">
        <section class="contactUs">
          <div className="imgbg">
            <img src={img1} alt="" />
          </div>
          <div className="formDet">
            <div className="paragraphHeader">
              <h2> التواصل معنا</h2>
              <img src={money} alt="" />
            </div>
            <form className="form-contact">
              <div className="field">
                <div>
                  <label htmlFor="form-email">البريد الالكتروني</label>
                  <input
                    type="email"
                    id="form-email"
                    placeholder="برجاء ادخل البريد الالكتروني"
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
              </div>
              <div className="space">
                <label htmlFor="textarea">رسالتك</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  placeholder="برجاء ادخال رسالتك"
                ></textarea>
              </div>
              <button type="submit"> إرسال</button>
            </form>
          </div>
        </section>
        <section class="footer">
          <div className="column1">
            <img className="logo" src={logo} alt="" />
            <p>
              مواقع باي ايجيبت يساعدك انك تسهل حياتك تحويل و ارسال الاموال مواقع
              باي ايجيبت يساعدك على انك تسهل حياتك تحويل وارسال الاموال
            </p>
            <div className="social">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
            </div>
          </div>{" "}
          <BrowserRouter>
            <div className="column2">
              <div className="lists1">
                <NavLink to="/" exact>
                  <h2> الرئيسية</h2>
                </NavLink>
                <NavLink to="/about">من نحن</NavLink>{" "}
                <NavLink to="/start">كيف ابدا</NavLink>{" "}
                <NavLink to="/FAQ">الأساله الشائعة</NavLink>
                <NavLink to="/contactUs">التواصل معنا</NavLink>
                <NavLink to="/FAQ"> تسجيل الدخول</NavLink>
                <NavLink to="/FAQ"> عمل حساب جديد</NavLink>
              </div>{" "}
            </div>
            <div className="column3">
              <div className="lists2">
                <NavLink to="/others" exact>
                  <h2> لينكات اخري</h2>
                </NavLink>
                <NavLink to="/money_">سحب الاموال</NavLink>{" "}
                <NavLink to="/money">إيداع الاموال</NavLink>{" "}
                <NavLink to="/FAQ">الأساله الشائعة</NavLink>
                <NavLink to="/using">سياسه الاستخدام</NavLink>
              </div>{" "}
            </div>{" "}
          </BrowserRouter>
          <div className="column4">
            <h2>التواصل </h2>
            <div>201245879636+</div>
            <div>PayEg@mailgen.club</div>
          </div>
        </section>
        <div className="using">
          <div className="column1">كل الحقوق محفوظة لدي شرکة @ باي ايجيبت</div>
          <div className="column2">
            <p className="para1">تعليمات الاستخدام</p>
            <p className="para2">|</p>
            <p>سياسة الخصوصيه</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs_footer;
