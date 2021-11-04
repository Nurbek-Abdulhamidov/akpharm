import React from "react";
import { useState, useEffect } from "react";
import "./client.css";
import { Star} from "@mui/icons-material";
import axios from "axios";

const Client = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://api.akpharm.uz/api/v1/review-list/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="client">
      <h1>Отзывы наших клиентов</h1>
      <div className="cardSwiperContainer">
        {data.map((item, index) => (
          <div className="cardSwiper" key={index}>
            <span>
              <img src={item.image} />
            </span>
            <p>{item.comment}</p>
            <div className="cardSwiperLike">
              <div className="likeCard">
                <h5>{item.author}</h5>
                <span>{item.workplace}</span>
              </div>
              <div className="cardStarLike">
                <i>
                  {item.rating === 5 ? (
                    <>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </>
                  ) : item.rating === 4 ? (
                    <>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </>
                  ) : (
                    ""
                  )}
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
