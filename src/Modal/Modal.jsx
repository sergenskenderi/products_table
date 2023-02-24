import Thumbnail from "../Picture/Picture";
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