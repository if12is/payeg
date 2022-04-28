import React from "react";
import "../FAQ/FAQ.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import money from "../img/money2.png";
import imgss from "../img/imgss.png";
class AccordionApp extends React.Component {
  render() {
    const hiddenTexts = [
      {
        label: "عن عمولة استلام الاموال من EG Pay",
        value:
          "يتم إبلاغ الموظف المختص في البنك برقم الحوالة ومن ثم البحث عنها والتأكد من وصولها. ثم يتم دفعها للمرسل إليه وإعطائه إيصال يفيد استلام الحوالة",
      },
      {
        label: "ادني مبلغ و اقصي مبلغ يمكن سحبه من EG Pay",
        value:
          "أصبح الحد الأقصى للسحب والإيداع من ماكينات الصراف الآلي للبنك EG Pay 20 ألف جنيه بدلًا من 5 آلاف جنيه مصري، و 50 ألف جنيه بدلًا من 10 آلاف جنيه في حالة السحب والإيداع من خلال فروع البنك.",
      },
      {
        label: "عن عمولة استلام الاموال من EG Pay",
        value:
          "يتم إبلاغ الموظف المختص في البنك برقم الحوالة ومن ثم البحث عنها والتأكد من وصولها. ثم يتم دفعها للمرسل إليه وإعطائه إيصال يفيد استلام الحوالة",
      },
      {
        label: "عن عمولة استلام الاموال من EG Pay",
        value:
          "يتم إبلاغ الموظف المختص في البنك برقم الحوالة ومن ثم البحث عنها والتأكد من وصولها. ثم يتم دفعها للمرسل إليه وإعطائه إيصال يفيد استلام الحوالة",
      },
    ];
    return (
      <React.Fragment>
        <Header />
        <div className="FAQ">
          <Accordion hiddenTexts={hiddenTexts} />
          <IMGFAQ />
        </div>
      </React.Fragment>
    );
  }
}

export default AccordionApp;

class Header extends React.Component {
  render() {
    return (
      <div className="paragraphHeaderFAQ">
        <h2> الاسئالة الشائعة</h2>
        <img src={money} alt="" />
      </div>
    );
  }
}
class IMGFAQ extends React.Component {
  render() {
    return (
      <div className="imgFAQ">
        <img src={imgss} alt="" />
      </div>
    );
  }
}

class Accordion extends React.Component {
  render() {
    return (
      <div className="accordion">
        {this.props.hiddenTexts.map((hiddenText) => (
          <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />
        ))}
        <button type="button" className="more">
          معرفة المزيد
        </button>
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    const activeStatus = this.state.visibility ? "active" : "";

    return (
      <div>
        <button
          className="accordion__button"
          onClick={this.handleToggleVisibility}
        >
          {this.props.hiddenText.label}
          <span className="..">
            {this.state.visibility ? <FaMinus /> : <FaPlus />}
          </span>
        </button>
        <p className={`accordion__content ${activeStatus}`}>
          {this.props.hiddenText.value}
        </p>
      </div>
    );
  }
}
