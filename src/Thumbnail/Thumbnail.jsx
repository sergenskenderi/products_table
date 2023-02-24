import "./Thumbnail.css";
import { brandImages } from "../brandImages";

const Thumbnail = ({isThumbnail,thumbnailImage,brand}) => {
    return (
        <span className="thumbnailContainer">
          <div className="thumbnailImageContainer avatar">
            <img src={thumbnailImage} alt="profile" className="thumbnailImage"/>
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

export default Thumbnail;