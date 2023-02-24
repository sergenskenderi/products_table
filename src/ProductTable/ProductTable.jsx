import ActionComponent from "../Action/ActionButtonComponent";
import "./ProductTable.css"
import GalleryComponent from "../Gallery/GalleryComponent";
import Picture from "../Picture/Picture";
import { brandImages } from "../brandImages";
import { useCallback, useMemo } from "react";

function ProductTable({products,handleDeleteProduct,error}) {

  const showBuyButton = useCallback((product) => {
    return brandImages[product.brand] && product.discountPercentage > 15 && product.rating > 4.8;
  },[]);

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
            products && products.length && products.map((product,key) => {
              return (
                <div key={key} className="row">
                  <div className="cell">
                    <Picture isThumbnail source={product.thumbnail}/>
                    <p className="title">
                      {product.title}
                    </p>
                  </div>
                  <div className="cell">{product.brand}</div>
                  <div className="cell">
                    <GalleryComponent brand={product.brand} images={product.images}/>
                  </div>
                  <div className="cell">
                  <ActionComponent showBuy={showBuyButton(product)} 
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
