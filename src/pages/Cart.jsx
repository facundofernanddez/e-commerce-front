import { useEffect, useState } from "react";
import { Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllProductsFromCart,
  removeProductFromCart,
} from "../reducers/cart/CartSlice";
import { Navigate, useNavigate } from "react-router-dom";

export const Cart = ({ logged }) => {
  const { productsList } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const priceList = productsList.map((product) => product.price);

    const sumAllPrices = priceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalPrice(sumAllPrices);
  }, [productsList]);

  const handleShowModal = () => {
    setShowModal(true);
    dispatch(removeAllProductsFromCart());
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleRemoveFromCart = (productId) => {
    console.log(productId);
  };

  return (
    <>
      {!logged && <Navigate to="/" />}
      <ul className="list-group list-group-flush rounded ">
        {productsList.map((product, index) => {
          return (
            <li className="list-group-item" key={index}>
              <div className="card mb-3" style={{ maxWidth: "300px" }}>
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <img
                      src={product.img}
                      className="img-fluid rounded-start"
                      alt="burger type"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">Price: ${product.price}</p>
                    </div>
                  </div>
                  <div className="col-md-2 ">
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleRemoveFromCart(index)}
                    ></button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        <p className="text-end fs-3 text-white ">Total: ${totalPrice}</p>
        <button
          type="button"
          className="btn btn-success fw-bold border border-2"
          onClick={handleShowModal}
        >
          Comprar
        </button>
      </ul>

      {/* Modal */}

      <Modal show={showModal} onHide={handleCloseModal}>
        <ModalHeader>¡Gracias por tu compra!</ModalHeader>
        <ModalFooter>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
