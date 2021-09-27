import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { addLs } from "../Local Storage/Storage";
import Product from "../Products/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  function handleAddToCart(e) {
    addLs(e.key);
    const newCart = [...items, e];
    setItems(newCart);
  }
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  function handleInput(e) {
    const searchText = e.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
    console.log(displayProducts);
  }
  return (
    <div>
      <div className="search-container pt-1 bg-dark">
        <input
          onChange={handleInput}
          className="w-75 border border-2 border-info"
          placeholder="Search products "
          type="text"
        />
        <p className=" text-white mt-2">
          <small>Available Products : " {displayProducts.length}"</small>
        </p>
      </div>

      {products.length === 0 ? (
        <div>
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row container-fluid">
          <div className="col-9 products-container border-end ">
            {displayProducts.map((product) => (
              <Product key={product.key} product={product}>
                handleAddToCart={handleAddToCart}
              </Product>
            ))}
          </div>
          <div className="cart-container col-3 ">
            <Cart items={items}></Cart>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
