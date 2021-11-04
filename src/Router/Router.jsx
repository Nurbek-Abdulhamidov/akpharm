import React from "react";
import Home from "../components/Home/Home";
import Category from "../components/pages/Category/Category";
import "./router.css";
import {Switch, Route } from "react-router-dom";
import Partner from "../components/pages/Partner/Partner";
import Bayer from "../components/pages/Bayer/Bayer";
import AxiosComp from "../components/AxiosComp/AxiosComp";

const RouterComp = () => {
  return (
      <Switch>
        <div className="router">
          <Route path="/" component={Home} exact />
          <Route path="/category" component={Category} exact />
          <Route path="/category/:slug" component={Category} exact />
          <Route path="/partner" component={Partner} exact />
          <Route path="/partner/:slug" component={Bayer} exact />
          <Route path="/axios" component={AxiosComp} exact />

          {/* //for category page */}
          {/* <Route path="/categories" component={Category} exact />
          <Route path="/categories/:slug" component={Category} exact /> */}
        </div>
      </Switch>
  );
};

export default RouterComp;
