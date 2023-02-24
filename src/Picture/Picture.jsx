import "./Picture.css";
import { brandImages } from "../brandImages";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Picture = ({isThumbnail,source,brand}) => {
    return (
        <span className="thumbnailContainer">
          <div className="thumbnailImageContainer avatar">
            {/* <img src={source} alt="profile" className="thumbnailImage"/> */}
            <LazyLoadImage 
               alt="profile"
               src={source}
               className="thumbnailImage"
            />
          </div>
          { !isThumbnail &&
          <span className="thumbnailBrandContainer">
            <div className="thumbnailBrandImageContainer">
              <img src={brandImages[brand] ? brandImages[brand] : brandImages.Default} alt="profile image" className="thumbnailImage"/>
            </div>
          </span>
          }
        </span>
    )
}

export default Picture;