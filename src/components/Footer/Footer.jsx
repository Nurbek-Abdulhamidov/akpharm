import React from "react";
import "./footer.css";
import logoFooter from "../../images/Group 10085.png";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <div className="footer">
      <div className="topFooter">
        <div className="logoNumber">
          <Link to="/" >
          <img src={logoFooter} alt="" />
          </Link>
          <h2>
            <span>998 71 </span> 208 67 84
          </h2>
        </div>
        <div className="aboutFooter">
          <h6>О Компании</h6>
          <p>О нас</p>
          <p>Почему мы?</p>
          <p>Наши преимущества</p>
        </div>
        <div className="informatinFooter">
          <h6>Доп информация</h6>
          <p>Как начать работать?</p>
          <p>Отзывы клиентов</p>
          <p>Партнеры Akpharm</p>
        </div>
        <div className="contactFooter">
          <h6>Контакты</h6>
          <div className="contactFooterAddress">
            <i>
              <BsFillTelephoneOutboundFill />
            </i>
            <p>998 71 208 67 84</p>
          </div>
          <div className="contactFooterAddress">
            <i>
              <HiLocationMarker />
            </i>
            <p>ул. Буюк Ипак Йули, 60, офис 87</p>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
          <p>© 2021 Akpharm Distribution. Все права защищены.</p>
      </div>
    </div>
  );
};

export default Footer;
