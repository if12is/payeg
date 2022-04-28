import React, { Component } from "react";
import About from "../about/about.jsx";
import GetIT from "../getIT/getIT.jsx";
import AccordionApp from "../FAQ/FAQ.jsx";
import Gallery from "../money/money.jsx";
import ContactUs_footer from "../contactUs_footer/contactUs_footer.jsx";
import img4 from "../img/image-4.png";
import img5 from "../img/Group128.png";
import img6 from "../img/Group131.png";
import img7 from "../img/Group133.png";

class Info extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="info">
          <div className="info-details">
            <div className="details">
              <h2>أسهل طريقة تحول بيها أموالك وترسل أموال</h2>
              <p>
                دلوقتي في اي مكان في العالم اسهل طريقة تحويل بيها أموالك وترسل
                أموالك دلوقتي في اي مكان في العالم
              </p>
            </div>
            <div className="cards">
              <div className="item1">
                <img src={img5} alt=".." />
                <h4> تحويل الاموال</h4>
              </div>
              <div className="item2">
                <img src={img6} alt="" />
                <h4> إرسال الاموال</h4>
              </div>
              <div className="item3">
                <img src={img7} alt="" />
                <h4>خدمة العملاء</h4>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={img4} alt="" />
          </div>
        </section>
        <About />
        <GetIT />
        <AccordionApp />
        <Gallery />
        <ContactUs_footer />
      </React.Fragment>
    );
  }
}

export default Info;
