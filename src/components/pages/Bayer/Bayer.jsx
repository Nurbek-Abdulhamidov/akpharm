import React, { useEffect, useState } from "react";
import "./bayer.css";
import axios from "axios";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navigation from "../../Navigation/Navigation";
import Footer from "../../Footer/Footer";
import Header from "../../sections/Header";
const Bayer = (props) => {
  const [manufacturerList, setManufacturerList] = useState([]);
  const [compProd, setCompProd] = useState([]);
  const [loading, setLoading] = useState(false);

  const slug = props.match.params.slug ? props.match.params.slug : "";
  useEffect(() => {
    getDataList();
    getCompProd();
  }, [props.match.params.slug]);

  const getDataList = () => {
    setLoading(true);
    axios
      .get(`https://api.akpharm.uz/api/v1/manufacturer-list/${slug}/?lan=uz`)
      .then((res) => {
        setManufacturerList(res.data);
        setLoading(false);
      })
      .catch((error) => {});
  };

  const getCompProd = () => {
    setLoading(true);
    axios
      .get(
        `https://api.akpharm.uz/api/v1/drug-list/?page=1&manufacturer=${slug}&lan=uz`
      )
      .then((res) => {
        setCompProd(res.data.results);
        setLoading(false);
      });
  };

  const pConvert = () => {
    return { __html: `${manufacturerList.description}` };
  };

  return (
    <div className="bayerWrapper">
      <Header title={manufacturerList.name} />
      <div className="categoryChange">
        <p>
          <Link to="/">Главная</Link>
        </p>
        <i>
          <AiOutlineRight />
        </i>
        <span className="partnerSpan">
          <Link to="/partner"> Наши партнеры </Link>
        </span>
        <i>
          <AiOutlineRight />
        </i>
        <span>BAYER</span>
      </div>

      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {manufacturerList ? (
            <>
              <div className="companyWrap">
                <img src={manufacturerList.logo} alt={manufacturerList.name} />
                <div className="aboutCompany">
                  <h3>Kompaniya haqida</h3>
                  <p dangerouslySetInnerHTML={pConvert()}></p>
                </div>
              </div>
            </>
          ) : (
            <div>Ma`lumot mavjud emas</div>
          )}
          <div className="productContainer">
            <h1>Kompaniya mahsulotlari</h1>
            <div className="productWrap">
              {compProd.map((item, index) => (
                <div className="aboutCompProd" key={index}>
                  <div className="compProd">
                    <img src={item.image} alt="" />
                    <span>{item.manufacturer.name}</span>
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Bayer;
