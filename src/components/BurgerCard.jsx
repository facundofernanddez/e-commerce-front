import { useDispatch, useSelector } from "react-redux";
import { burgersList } from "../images/info-burgers/burgersList";
import {
  addProductToCart,
  removeProductFromCart,
} from "../reducers/cart/CartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const BurgerCard = ({ logged }) => {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    const product = burgersList.find((i) => i.id === productId);
    dispatch(addProductToCart(product));
  };

  return (
    <>
      <div className="row">
        {burgersList.map((burger, index) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4 my-2 " key={index}>
              <div className="card border border-3">
                <img src={burger.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{burger.name}</h5>
                  <p className="card-text text-secondary">
                    {burger.description}
                  </p>
                  <p className="card-text fw-bold">Price: ${burger.price}</p>
                  <button
                    type="button"
                    className="btn btn-outline-success opacity-75 fw-bold"
                    onClick={() => {
                      logged ? handleAddToCart(burger.id) : navigate("/login");
                    }}
                  >
                    Add to cart
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
