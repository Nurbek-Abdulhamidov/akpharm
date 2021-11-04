import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navigation from "../../Navigation/Navigation";
import "./partner.css";
import Footer from "../../Footer/Footer";
import Contact from "../../Contact/Contact";
import Header from "../../sections/Header";

const Partner = (props) => {
  const [data, setData] = useState([]);
  const slug = props.match.params.slug;
  const getData = () => {
    axios
      .get("https://api.akpharm.uz/api/v1/manufacturer-list/")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };
  useEffect(() => {
    getData();
  }, [slug]);
  const title = "Наши партнеры";
  return (
    <div className="partner">
      <Header title={title} />
      <div className="partnerLogoWrap">
        <div className="partnerChange">
          <p>
            <Link to="/">Главная</Link>
          </p>
          <i>
            <AiOutlineRight />
          </i>
          <span>
            <Link to="/category"> Категория товаров в Akpharm </Link>
          </span>
          <i>
            <AiOutlineRight />
          </i>
          <label className="spanClass"> Наши партнеры </label>
        </div>
        <div className="companyLogo">
          {data.map((item, index) => (
            <Link to={"/partner/" + item.slug} key={index}>
              <div className="cardCompanyLogo">
                <img src={item.logo} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Partner;
