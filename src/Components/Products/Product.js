import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;

const Product = (props) => {
  //   console.log(props.children[1]);
  const { img, name, price, seller, star } = props.product;
  return (
    <div className="row text-start p-3 border-bottom my-2">
      <div className="col-4">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="col-8">
        <h5>{name}</h5>
        <p>
          <small>by ; {seller}</small>
        </p>
        <Rating
          className="text-warning"
          emptySymbol="fa fa-star-o "
          fullSymbol="fa fa-star "
          initialRating={star}
          readonly
        />

        <h3>Price : $ {price}</h3>
        <button
          onClick={() => props.children[1](props.product)}
          className="btn btn-warning px-3 mt-2"
        >
          {" "}
          {shoppingCart} Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
