import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const productsInCart = cart.productsList;
  return (
    <ul className="list-group list-group-flush">
      {productsInCart.map((product) => {
        <>
          <li className="list-group-item">{product.name}</li>
          {/* <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
        </>;
      })}
    </ul>
  );
};
