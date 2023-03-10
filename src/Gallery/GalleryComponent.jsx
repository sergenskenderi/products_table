import { useRef } from "react";
import Modal from "../Modal/Modal";
import Picture from "../Picture/Picture";
import "./Gallery.css";

const GalleryComponent = ({images,brand}) => {
    const galleryModalRef = useRef(null);

  function openModal() {
    galleryModalRef.current.style.display = 'block';
  }

  function closeModal() {
    galleryModalRef.current.style.display = 'none';
  }

  const firstFiveImages = images.slice(0, 5);
  const remainingImages = images.slice(5);

    return (
        <div className="gallery_container">
          { images && images.length > 5 && <div>
                <div className="checkForMore" onMouseEnter={() => openModal()} onMouseLeave={() => closeModal()}>
                    +{images.length - 5}
                </div>
                <Modal modalRef={galleryModalRef}>
                  <div className="galleryModalContent">
                  {remainingImages.map((image, key) => (
                    <Picture brand={brand} key={key} source={image}/>
                  ))}
                  </div>
                </Modal>
            </div>
          }
          {
            images && firstFiveImages.map((image,key) => <Picture key={key} brand={brand} source={image}/>)
          }
        </div>
    )
}

export default GalleryComponent;