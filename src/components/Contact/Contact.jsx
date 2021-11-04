import "./contact.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import TextField from "@mui/material/TextField";
// import Box from '@mui/material/Box';

const Contact = () => {
  const [name, setName] = useState("");
  const [named, setNamed] = useState("");
  const [number, setNumber] = useState("");
  const [numbered, setNumbered] = useState("");
  const [text, setText] = useState("");
  const [texted, setTexeted] = useState("");
  const lastNumber = "5";

  function handleClick() {
    if (name.length < lastNumber) {
      setNamed("Ismingiz 5 harfdan ko'p bo'lishi kerak");
    } else {
      setNamed("");
    }
    if (name === "") {
      setNamed("Ismingizni kiriting");
    }

    if (number === "") {
      setNumbered("Raqamingizni kiriting");
    } else {
      setNumbered("");
    }

    if (text === "") {
      setTexeted("Iltimos fikringizni bildiring");
    } else {
      setTexeted("");
    }
  }

  return (
    <div className="contactWrap" id="contact">
      <div className="leftContact">
        <h1>Оставьте заявку и мы свяжемся с Вами </h1>
        <p>
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста
        </p>
        <div className="aboutContact">
          <i>
            <BsFillTelephoneOutboundFill />
          </i>
          <span>998 71 208 67 84</span>
        </div>
        <div className="aboutContact">
          <i>
            <TiLocation />
          </i>
          <span>ул. Буюк Ипак Йули, 60, офис 87</span>
        </div>
      </div>
      <div className="rightContact">
        <p>Имя Фамилия</p>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            setNamed("");
          }}
        />
        <p className="inputError">{named}</p>

        <p>Номер телефона</p>
        <div className="inputPhone">
          <PhoneInput
            onChange={(e) => {
              setNumber(e.target);
              setNumbered("");
            }}
            country={"uz"}
          />
        </div>

        <p className="inputError">{numbered}</p>
        <div className="textArea">
          <p>Что вас интересует</p>
          <textarea
            name=""
            id=""
            cols="40"
            rows="7"
            onChange={(e) => {
              setText(e.target.value);
              setTexeted("");
            }}
          ></textarea>
          <p className="inputError">{texted}</p>
          <button
            onClick={() => {
              handleClick();
            }}
            className="inputBtn"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
