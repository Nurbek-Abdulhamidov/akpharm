import React from "react";
import Navigation from "../Navigation/Navigation";
import "./home.css";
import { useTranslation } from "react-i18next";
import About from "../About/About";
import Clinic from "../Clinic/Clinic";
import Price from "../Price/Price";
import SwiperComp from "../SwiperFile/SwiperComp";
import ContactWrap from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Client from "../Client/Client";
import { Route, Switch } from "react-router";
import Header from "../sections/Header";

const Home = () => {
  const { t } = useTranslation();
  const title =
    "Дистрибьюторская компания, с которой приятно работать в сотрудничестве!";
  return (
    <>
      <Header title={title} />
      <About />
      <Clinic />
      <Price />
      <SwiperComp />
      <Client />
      <ContactWrap />
      <Footer />
    </>
  );
};

export default Home;
