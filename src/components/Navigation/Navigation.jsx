import React from "react";
import "./navigation.css";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.png";
import uzFlag from "../../images/Uzbekistan.png";
import rusFlag from "../../images/rusFlag.png";
import enFlag from "../../images/enFlag.png";

import { GrDown } from "react-icons/gr";

import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const onLanguageHandle = (newLang) => {
    i18n.changeLanguage(newLang);
    window.localStorage.setItem("language", newLang);
  };
  const ScrollComp = () => {
    let c = window.document.getElementById("contact").offsetTop;
    console.log(c);
    window.scrollTo(0, c);
  };
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar">
        <span>
          <Link to="/category">{t("navbar.product")}</Link>
        </span>
        <span>
          <Link to="/partner">{t("navbar.partner")}</Link>
        </span>
        <div className="language">
          <button
            onClick={() => onLanguageHandle("uz")}
            className="languageBtn"
          >
            <img src={uzFlag} alt="" />
            <p>Ўзбек</p>
            <label>
              <GrDown />
            </label>
          </button>
          <button
            onClick={() => onLanguageHandle("ru")}
            className="languageBtn"
          >
            <img src={rusFlag} alt="" />
            <p>Русский</p>
          </button>
          <button
            onClick={() => onLanguageHandle("en")}
            className="languageBtn"
          >
            <img src={enFlag} alt="" />
            <p>English</p>
          </button>
        </div>
        <div className="arizaBtn">
          <span
            onClick={() => {
              ScrollComp("contact");
            }}
            href="/#contact"
          >
            {t("navbar.request")}
          </span>
        </div>
        <div className="hamburger">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
