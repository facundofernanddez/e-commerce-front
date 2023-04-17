import { useDispatch, useSelector } from "react-redux";
import { burgersList } from "../images/info-burgers/burgersList";

export const BurgerCard = (cart) => {
  const dispatch = useDispatch();
  const productsList = cart.productsList;

  const handleAddOrRemoveToCart = (productId) => {
    const product = productsList.find((i) => i.id === productId);
  };

  return (
    <>
      <div className="row">
        {burgersList.map((burger) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={burger.id}>
              <img src={burger.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{burger.name}</h5>
                <p className="card-text">{burger.description}</p>
                <button
                  href="#"
                  className="btn btn-primary"
                  onClick={handleAddOrRemoveToCart}
                >
                  Agregar a carrito
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
