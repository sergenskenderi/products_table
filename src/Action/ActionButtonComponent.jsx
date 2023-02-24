import { useEffect, useRef } from "react";
import Modal from "../Modal/Modal"
import "./ActionButton.css"

const ActionComponent = ({showBuy,product,handleDeleteProduct}) => {
  const modalRef = useRef(null);
  const confirmModalRef = useRef(null);

  function openModal(isConfirmModal) {
    if(isConfirmModal)
    confirmModalRef.current.style.display = 'block';
    else
    modalRef.current.style.display = 'block';
  }

  function closeModal(isConfirmModal) {
    if(isConfirmModal)
    confirmModalRef.current.style.display = 'none';
    else
    modalRef.current.style.display = 'none';
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleBuyClick = (event) => {
    event.preventDefault();
    window.open(`https://www.${product.brand}.com`, "_blank");
  };
  
  const handleCopyCategoryClick = () => {
    navigator.clipboard.writeText(product.category);
  }

  return (
    <div>
      <button className="triple-dot" onClick={() => openModal()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Modal isActionStyle modalRef={modalRef}>
        <div className="actionModalContent">
          {showBuy && <p onClick={handleBuyClick}>Buy Now</p>}
          <p onClick={() => handleCopyCategoryClick()}>Copy category</p>
          <p className="deleteLabel" onClick={() => {
            // handleDeleteProduct(product.id)
            closeModal();
            openModal(true);
            }}>Remove from the list</p>
        </div>
      </Modal>
      <Modal isActionStyle modalRef={confirmModalRef}>
        <div className="actionModalContent">
          <p>Are you sure you want to delete this product ?</p>
          <div className="confirmModalButtonContainer">
            <button onClick={() => {
              closeModal(true);
              openModal();
            }}>Cancel</button>
            <button onClick={() => {
              handleDeleteProduct(product.id)
              closeModal(true)
              }}>Delete</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ActionComponent