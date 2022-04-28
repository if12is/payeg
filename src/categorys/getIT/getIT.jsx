import React, { Component } from "react";
import money from "../img/money2.png";
import img1 from "../img/Group154.png";
import img2 from "../img/Group128.png";
import img3 from "../img/computer.png";
import img4 from "../img/mobile.png";
import img5 from "../img/payement.png";
import img6 from "../img/wallet.png";
class GetIT extends Component {
  render() {
    return (
      <section className="GetIT">
        <div className="GetIT-details">
          <div className="paragraphHeader">
            <h2> كيفية الاشتراك</h2>
            <img src={money} alt="" />
          </div>
          <div className="cards">
            <div className="card-item1 extensions">
              <img src={img1} alt="" />
              <h3>الاشتراك Pay Eg</h3>
            </div>
            <div className="card-item2 extensions">
              {" "}
              <img src={img2} alt="" />
              <h3>
                تحويل الرصيد من
                <br />
                Pay Eg
              </h3>
            </div>
            <div className="card-item3 extensions">
              {" "}
              <img src={img3} alt="" />
              <h3> الدخول الي حسابك و اضافه تحويل</h3>
            </div>
            <div className="card-item4 extensions">
              {" "}
              <img src={img4} alt="" />
              <h3> اضافه حساب خاص بك</h3>
            </div>
            <div className="card-item5 extensions">
              {" "}
              <img src={img5} alt="" />
              <h3>فتح طلب سحب الاموال</h3>
            </div>
            <div className="card-item6 extensions">
              {" "}
              <img src={img6} alt="" />
              <h3> إرسال و استقبال الاموال علي محفظتك</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GetIT;
