import { useDispatch, useSelector } from "react-redux";
import { burgersList } from "../images/info-burgers/burgersList";
import { addProductToCart } from "../reducers/cart/CartSlice";

export const BurgerCard = (cart) => {
  const dispatch = useDispatch();
  const productsList = cart.productsList;
  const totalCount = cart.totalCount;

  const isInCart = (productId) => {
    productsList.find((i) => i.id === productId);
  };

  const handleAddToCart = (productId) => {
    const product = productsList.find((i) => i.id === productId);
    dispatch(addProductToCart(product));
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
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card" key={burger.id}>
                <img src={burger.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{burger.name}</h5>
                  <p className="card-text">{burger.description}</p>
                  <button
                    href="#"
                    className="btn btn-success"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                  {
                    <button
                      href="#"
                      className="btn btn-danger"
                      onClick={handleAddToCart}
                    >
                      Remove from cart
                    </button>
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
