import { useMemo, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import Thumbnail from "../Thumbnail/Thumbnail";
import "./Gallery.css";

const GalleryComponent = ({images,brand}) => {
    const galleryModalRef = useRef(null);

  function openModal() {
    galleryModalRef.current.style.display = 'block';
  }

  function closeModal() {
    galleryModalRef.current.style.display = 'none';
  }

  const hasGalleryImages = useMemo(() => {
    return images && images.length;
  },[images]);

  const firstFiveImage = images.slice(0, 5);
    return (
        <div className="gallery_container">
          { hasGalleryImages && images.length > 5 && <div>
                <div className="checkForMore" onMouseEnter={() => openModal()} onMouseLeave={() => closeModal()}>
                    +{images.length - 5}
                </div>
                <Modal modalRef={galleryModalRef}>
                  <div className="galleryModalContent">
                  {images.slice(5).map((image, key) => (
                    <Thumbnail brand={brand} key={key} thumbnailImage={image}/>
                  ))}
                  </div>
                </Modal>
            </div>
          }
          {
            hasGalleryImages && firstFiveImage.map((image,key) => <Thumbnail key={key} brand={brand} thumbnailImage={image}/>)
          }
        </div>
    )
}

export default GalleryComponent;