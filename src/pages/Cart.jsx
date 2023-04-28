import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { productsList } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    const priceList = productsList.map(product => product.price)

    const sumAllPrices = priceList.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
    setTotalPrice(sumAllPrices);
  },[productsList])

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  


  return (
    <>
      <ul className="list-group list-group-flush rounded ">
        {productsList.map((product) => {
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
      <p className="text-end fs-3 text-white ">Total: ${totalPrice}</p>
      <button className="btn btn-success fw-bold border border-2" onClick={handleShowModal}>Comprar</button>
      </ul>

      {/* Modal */}

      <Modal show={showModal} onHide={handleCloseModal}>
        <ModalHeader >¡Gracias por tu compra!</ModalHeader>
        <ModalFooter>
          <button className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
        </ModalFooter>
      </Modal>
    
    </>
  );
};
