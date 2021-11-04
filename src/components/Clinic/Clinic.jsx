import React from "react";
import "./clinic.css";
import rightImg from "../../images/rightClinicImg.png";
import rightImg2 from "../../images/rightClinicImg2.png";
import {TiTick} from "react-icons/ti"
import { useTranslation } from "react-i18next";

const Clinic = () => {

    const {t,i18n} =useTranslation()

  return (
    <div className="clinic">
      <div className="leftClinic">
        <h1>{t("clinic.header")}</h1>
        <p>
          {t("clinic.paragraph")}
        </p>
        <div className="leftClinicIcon">
          <div className="clinicIcon">
           <i> <TiTick/></i>
            <h3>{t("clinicIcon.header")}</h3>
            <p>{t("clinicIcon.paragraph")}</p>
          </div>
          <div className="clinicIcon1">
          <i><TiTick/></i>
            <h3>{t("clinicIcon1.header")}</h3>
            <p>{t("clinicIcon1.paragraph")}</p>
          
          </div>
        </div>
      </div>
      <div className="rightClinic">
        <img src={rightImg} />
        <img src={rightImg2} />
      </div>
    </div>
  );
};

export default Clinic;
