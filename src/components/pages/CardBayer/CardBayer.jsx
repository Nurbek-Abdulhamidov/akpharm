import React, { useEffect, useState } from "react";
import "./card.css";
// import dori from "../../../images/image 59.png";
import axios from "axios";

const CardBayer = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://api.akpharm.uz/api/v1/manufacturer-list/?page=1&lan=uz")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      {data.map((item, index) => (
        <div className="cardCategory" key={index}>
          <img className="cardCategoryImg" src={item.image}/>
          <div className="cardCategoryTitle">{item.slug}</div>
          <div className="cardCategoryName">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CardBayer;
