import React, { useEffect, useState } from "react";
import axios from "axios";
import "./category.css";
import Client from "../../Client/Client";
import Navigation from "../../Navigation/Navigation";
import { AiOutlineRight } from "react-icons/ai";

import { Link, NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../sections/Header";

const Category = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const slug = props.match.params.slug;
  const getData = () => {
    setLoading(true);
    axios
      .get("https://api.akpharm.uz/api/v1/category-list/")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [card, setCard] = useState([]);
  useEffect(() => {
    getCard();
  }, [slug]);
  const getCard = () => {
    setLoading(true);
    axios
      .get(
        "https://api.akpharm.uz/api/v1/drug-list/" +
          (slug ? "?category=" + slug : "")
      )
      .then((res) => {
        setCard(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const title = "Категория товаров в Akpharm";
  return (
    <div className="containerCategory">
      <Header title={title} />
      <div className="categoryChange">
        <p>
          <Link to="/">Главная</Link>
        </p>
        <i>
          <AiOutlineRight />
        </i>
        <span>Категория товаров в Akpharm</span>
      </div>
      <div className="category">
        <div className="leftCategory">
          <NavLink
            to={"/category/"}
            exact
            className="notActiveLink"
            activeClassName="activeNavLink"
          >
            Barchasi
          </NavLink>

          {data.map((item, index) => (
            <NavLink
              to={"/category/" + item.slug}
              exact
              className="notActiveLink"
              activeClassName="activeNavLink"
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="rightCategory">
          {loading ? (
            <h3>loading...</h3>
          ) : (
            <>
              {card.map((card, index) => (
                <div className="cardCategory" key={index}>
                  <img className="cardCategoryImg" src={card.image} />
                  <div className="cardCategoryTitle">{card.slug}</div>
                  <div className="cardCategoryName">{card.name}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <Client />
      <Footer />
    </div>
  );
};

export default Category;
