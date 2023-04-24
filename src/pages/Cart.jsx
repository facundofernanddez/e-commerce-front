import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { productsList } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <ul className="list-group list-group-flush rounded ">
        {productsList.map((product) => {
          useEffect(() => {
            setTotalPrice(totalPrice + product.price);
          }, [productsList]);
          return (
            <>
              <li className="list-group-item">
                <div className="card mb-3" style={{ maxWidth: "300px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.img}
                        class="img-fluid rounded-start"
                        alt="burger type"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Price: ${product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
      <p className="text-end fs-3 text-white ">Total: ${totalPrice}</p>
    </>
  );
};
