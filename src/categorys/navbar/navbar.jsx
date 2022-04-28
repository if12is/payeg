import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import logo from "../img/logo.jpg";
import Info from "../main/main.jsx";
import About from "../about/about.jsx";
import GetIT from "../getIT/getIT.jsx";
import AccordionApp from "../FAQ/FAQ.jsx";
import Login from "../login/login.jsx";
import ContactUs_footer from "../contactUs_footer/contactUs_footer.jsx";

const MyNavLink = (props) => (
  <NavLink exact activeClassName="active" {...props}>
    {props.children}
  </NavLink>
);
export class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <header id="header" className="header">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="list">
              <NavLink to="/" exact activeClassName="active1">
                الصفحة الرئيسية
              </NavLink>
              <MyNavLink to="/about">من نحن</MyNavLink>{" "}
              <MyNavLink to="/start">كيف ابدا</MyNavLink>{" "}
              <MyNavLink to="/FAQ">الأساله الشائعة</MyNavLink>
              <MyNavLink to="/contactUs">التواصل معنا</MyNavLink>
            </div>
            <div className="login">
              <MyNavLink to="/login">تسجيل الدخول</MyNavLink>
            </div>
            <div className="toggle" onClick="#"></div>
          </header>
          <section className="category">
            <Switch>
              <Route path="/" exact component={Info} />
              <Route path="/about" component={aboutPage} />
              <Route path="/start" component={startPage} />
              <Route path="/FAQ" component={faqPage} />
              <Route path="/contactUs" component={contactPage} />
              <Route path="/login" component={loginPage} />
            </Switch>
          </section>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default NavBar;

class aboutPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <About />
        <ContactUs_footer />
      </React.Fragment>
    );
  }
}
class startPage extends React.Component {
  render() {
    return (
      <div className="startPage">
        <GetIT />
        <ContactUs_footer />
      </div>
    );
  }
}
class faqPage extends React.Component {
  render() {
    return (
      <div className="faqPage">
        <AccordionApp />
        <ContactUs_footer />
      </div>
    );
  }
}
class contactPage extends React.Component {
  render() {
    return (
      <div className="contactPage">
        <ContactUs_footer />
      </div>
    );
  }
}
class loginPage extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <Login />
        <ContactUs_footer />
      </div>
    );
  }
}
