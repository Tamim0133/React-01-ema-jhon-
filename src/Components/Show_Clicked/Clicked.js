import React from "react";

const Clicked = () => {
  function showClicked() {
    let savedDb = JSON.parse(localStorage.getItem("shopping_cart"));
    console.log(savedDb);
  }
  return <div></div>;
};

export default Clicked;
