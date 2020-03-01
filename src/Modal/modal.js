import React from "react";
import { observer } from "mobx-react";
import modalStore from "../Stores/Modal/modal";
import "./modal.css";

const Modal = observer(() => {
  const { component, isOpen, hasBackdrop } = modalStore;
  return (
    <div>
      {isOpen ? (
        <div className={hasBackdrop ? "backdrop" : ""}>
          <div className="modal">{component}</div>
        </div>
      ) : null}
    </div>
  );
});
export default Modal;
