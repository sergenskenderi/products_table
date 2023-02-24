import ActionComponent from "../Action/ActionButtonComponent";
import "./ProductTable.css"
import GalleryComponent from "../Gallery/GalleryComponent";
import Picture from "../Picture/Picture";
import { brandImages } from "../brandImages";

function showBuyButton(product) {
  return brandImages[product.brand] && product.discountPercentage > 15 && product.rating > 4.8;
}

function ProductTable({products,handleDeleteButtonClick,error}) {
  return (
    <>
      {
        error ? <p className="errorLabel">Something went wrong. Please try again later.</p> : 
        <div className="table">
          { products?.length &&
          <>
          <div className="row header">
            <div className="cell header">Name</div>
            <div className="cell header">Brand</div>
            <div className="cell header">Gallery</div>
            <div className="cell header">Actions</div>
          </div>
          { products.map((product,key) => {
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
                                   handleDeleteButtonClick={handleDeleteButtonClick}/>
                  </div>
                </div>
              )
            })
           }
          </>
         }
       </div>
      }
    </>
  );
}

export default ProductTable;
