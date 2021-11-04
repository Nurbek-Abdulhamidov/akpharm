import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/autoplay";
import "./swiperStyle.css";
import { useHistory } from "react-router";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const SwiperComp = () => {
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getData = () => {
    setLoading(true)
    axios
      .get("https://api.akpharm.uz/api/v1/category-list/")
      .then((res) => {
        setData(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const history = useHistory();

  function handleClick() {
    history.push("/category");
  }

  return (
    <div className="swiperClass">
      <h1>Каталог товаров в Akpharm</h1>

      <div className="category-slides">
        <div className="swiperContainer">
          <div className="swiper-custom-container">
            <Swiper
              direction={"horizontal"}
              autoplay={{
                delay: 2000,
              }}
              slidesPerView={3}
              navigation={true}
              loop={true}
              spaceBetween={0}
              centeredSlides
              style={{ padding: 90 }}
              className="mySwiper"
            >
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
              {data.map((item, index) => (
                <SwiperSlide key={index} className="swiper">
                  <div className="swiperImg">
                    <img src={item.image} alt="" />
                  </div>
                  
                  <button className="swiperBtn" onClick={handleClick}>
                    {item.name}
                  </button>
              
                </SwiperSlide>
              ))} 
              </>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwiperComp;
