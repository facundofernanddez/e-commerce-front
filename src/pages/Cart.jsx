import { useState } from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { productsList } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <ul className="list-group list-group-flush">
        {productsList.map((product) => {
          setTotalPrice((product.price += totalPrice));
          return (
            <>
              <li className="list-group-item">
                Nombre: <b>{product.name}</b> Precio: <b>{product.price}</b>
              </li>
            </>
          );
        })}
      </ul>
      <p className="text-end fs-3 text-white border border-3">
        Total: ${totalPrice}
      </p>
    </>
  );
};
