import React from "react";
import businessMen from "../../images/doctor.png";
import businessMen2 from "../../images/team-doctor.png";
import "./about.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="left">
        <img className="firstImg" src={businessMen} alt="" />
        <img className="secondImg" src={businessMen2} alt="" />
      </div>
      <div className="right">
        <h1>{t("about.header")}</h1>
        <p>{t("about.paragraph")}</p>
        <div className="numbers">
          <div className="result1">
            <p>340</p>
            <span>{t("about.staff")}</span>
          </div>
          <div className="result1">
            <p>180</p>
            <span>{t("about.suppliers")}</span>
          </div>
          <div className="result1">
            <p>600</p>
            <span>{t("about.client")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
