import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { mount } from "marketing/MarketingApp";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
console.log(mount);
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
