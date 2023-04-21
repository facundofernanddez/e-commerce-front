import { useDispatch, useSelector } from "react-redux";
import { burgersList } from "../images/info-burgers/burgersList";
import {
  addProductToCart,
  removeProductFromCart,
} from "../reducers/cart/CartSlice";
import { useState } from "react";

export const BurgerCard = (cart) => {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.cart);

  //TODO:
  //confict with isInCart property in handleAddToCart function.

  const handleAddToCart = (productId) => {
    const product = burgersList.find((i) => i.id === productId);
    dispatch(addProductToCart(product));
    const productInCart = productsList.find((i) => i.id === productId);
    productInCart.isInCart = true;
  };

  const handleRemoveFromCart = (productId) => {
    const product = productsList.find((i) => i.id === productId);
    dispatch(removeProductFromCart(product));
  };

  return (
    <>
      <div className="row">
        {burgersList.map((burger) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={burger.id}>
              <div className="card">
                <img src={burger.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{burger.name}</h5>
                  <p className="card-text">{burger.description}</p>
                  <button
                    type="button"
                    className="btn btn-outline-success opacity-75 fw-bold"
                    onClick={() => {
                      handleAddToCart(burger.id);
                    }}
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger opacity-75 fw-bold"
                    onClick={() => {
                      handleRemoveFromCart(burger.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
