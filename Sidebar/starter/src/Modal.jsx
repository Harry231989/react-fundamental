import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
   const {isModal, closeModal} = useGlobalContext()
  return (
    <div className="modal-overlay">
        <div className="modal-container">
            <h3>modal content</h3>
        </div>
    </div>
  )
}

export default Modal