import "./Picture.css";
import { brandImages } from "../brandImages";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Picture = ({isThumbnail,source,brand}) => {
  const thumbnailBrandImage = brandImages[brand] ? brandImages[brand] : brandImages.Default;

    return (
        <span className="thumbnailContainer">
          <div className="thumbnailImageContainer avatar">
            <LazyLoadImage 
               alt="profile"
               src={source}
               className="thumbnailImage"
            />
          </div>
          {!isThumbnail &&
          <span className="thumbnailBrandContainer">
            <div className="thumbnailBrandImageContainer">
              <img src={thumbnailBrandImage} alt="profile image" className="thumbnailImage"/>
            </div>
          </span>
          }
        </span>
    )
}

export default Picture;