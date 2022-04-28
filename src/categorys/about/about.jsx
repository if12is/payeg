import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import imgWorld from "../img/world-map.jfif";
import money from "../img/money2.png";
class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="world-img">
          <img src={imgWorld} alt="" />
        </div>
        <div className="about-details">
          <div className="paragraphHeader">
            <h2>من نحن</h2>
            <img src={money} alt="" />
            <div>
              العالمية وهي مزود XEN هي إحدى الشركات مجموعة PayEG خدمات مصرفية
              محلى لعمل داخل جمهورية مصر العربية فقط الي عدة طرق بسهولة PayPal
              لليح للمستخدمين تحويل أرصدة وينتر وأمان على أمرأة على مواقع المري
              لألللل PayEG مهمتنا أن يحصل عميل
            </div>
            <BrowserRouter>
              <div className="linkPara">
                <NavLink to="/login"> سجل الان</NavLink>
                <Route path="/login" />
              </div>
            </BrowserRouter>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
