import React from "react";
import "./price.css"
import {BsFillBellFill} from "react-icons/bs"
import {FaEnvelope} from "react-icons/fa"
import {ImPriceTag} from "react-icons/im"
import {IoLogoBuffer} from "react-icons/io"
const Price = () => {
  return (
    <div className="price">
      <h1>Наши Преимущества</h1>
      <div className="priceWrapper">
        <div className="priceIcon">
          <i className="bell"><BsFillBellFill/></i>
          <h3>Широкий ассортимент</h3>
          <p>
            majority have suffered alteration in words which don't look even
            have slightly randomised .
          </p>
        </div>
        <div className="priceIcon">
          <i className="buffer"><IoLogoBuffer/></i>
          <h3>Широкий ассортимент</h3>
          <p>
            majority have suffered alteration in words which don't look even
            have slightly randomised .
          </p>
        </div>
        <div className="priceIcon">
          <i className="envelope"><FaEnvelope/></i>
          <h3>Широкий ассортимент</h3>
          <p>
            majority have suffered alteration in words which don't look even
            have slightly randomised .
          </p>
        </div>
        <div className="priceIcon">
          <i className="price"><ImPriceTag/></i>
          <h3>Широкий ассортимент</h3>
          <p>
            majority have suffered alteration in words which don't look even
            have slightly randomised .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;
