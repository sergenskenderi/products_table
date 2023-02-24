import Thumbnail from "../Thumbnail/Thumbnail";
import "./Modal.css"

const Modal = ({isActionStyle,children,modalRef}) => {
    const styleModalPosition = {
        transform : isActionStyle ? "translateX(-100%)" : "none"
    }
    return (
        <div className="modal" style={styleModalPosition} ref={modalRef}>
            <div className="modalContainer">
                {children}
            </div>
        </div>
    );
}

export default Modal