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
  const [productInCart, setProductInCart] = useState([]);

  //TODO:
  //Generar numero randoms para los id de las burgers.

  const handleAddToCart = (productId) => {
    const product = burgersList.find((i) => i.id === productId);
    dispatch(addProductToCart(product));
    const productInCart = productsList.find((i) => i.id === productId);
    console.log(productInCart);
  };

  const handleRemoveFromCart = (productId) => {
    const product = productsList.find((i) => i.id === productId);
    dispatch(removeProductFromCart(product));
  };

  const isInCart = (productId) => {
    if (productsList.find((i) => i.id === productId)) {
      return true;
    }
  };

  return (
    <>
      <div className="row">
        {burgersList.map((burger, index) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
              <div className="card">
                <img src={burger.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{burger.name}</h5>
                  <p className="card-text">{burger.description}</p>
                  <button
                    type="button"
                    className="btn btn-outline-success opacity-75 fw-bold"
                    onClick={() => {
                      logged ? handleAddToCart(burger.id) : navigate("/login");
                    }}
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger opacity-75 fw-bold"
                    onClick={() => {
                      isInCart(burger.id)
                        ? handleRemoveFromCart(burger.id)
                        : console.log("producto no esta en el carrito");
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
