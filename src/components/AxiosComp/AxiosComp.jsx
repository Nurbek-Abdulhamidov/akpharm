import axios from "axios";
import { useEffect, useState } from "react";

const AxiosComp = () => {
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
  // const postData = () => {
  //   axios
  //     .post("https://api.akpharm.uz/api/v1/review-list/", {
  //       name: "sadsf",
  //       password: "sdfsd",
  //       comment: "sdfs",
  //     })
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      AxiosComp
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.image} />
            {item.author}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          getData();
        }}
      >
        get
      </button>
    </div>
  );
};
export default AxiosComp;
