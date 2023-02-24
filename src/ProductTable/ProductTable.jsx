import ActionComponent from "../Action/ActionButtonComponent";
import "./ProductTable.css"
import GalleryComponent from "../Gallery/GalleryComponent";
import Thumbnail from "../Thumbnail/Thumbnail";
import { brandImages } from "../brandImages";
import { useMemo } from "react";

function ProductTable({products,handleDeleteProduct,error}) {
  const hasProducts = useMemo(() => {
    return products && products.length
  },[products]);

  return (
    <>
      {
        error ? <p className="errorLabel">Something went wrong. Please try again later.</p> : 
        <div className="table">
          <div className="row header">
            <div className="cell header">Name</div>
            <div className="cell header">Brand</div>
            <div className="cell header">Gallery</div>
            <div className="cell header">Actions</div>
          </div>
          {
            hasProducts && products.map((product,key) => {
              return (
                <div key={key} className="row">
                  <div className="cell">
                    <Thumbnail isThumbnail thumbnailImage={product.thumbnail}/>
                    <p className="title">
                      {product.title}
                    </p>
                  </div>
                  <div className="cell">{product.brand}</div>
                  <div className="cell">
                    <GalleryComponent brand={product.brand} images={product.images}/>
                  </div>
                  <div className="cell">
                  <ActionComponent showBuy={brandImages[product.brand] && product.discountPercentage > 15 && product.rating > 4.8} 
                                  product={product} 
                                  handleDeleteProduct={handleDeleteProduct}/>
                  </div>
                </div>
              )
            })
          }
       </div>
      }
    </>
  );
}

export default ProductTable;
