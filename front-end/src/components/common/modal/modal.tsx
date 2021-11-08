import React, { ReactNode } from "react";

interface Props {
  closeModal: () => void;
  children: ReactNode;
}

const Modal = ({ closeModal, children }: Props) => {
  return (
    <div className="modal" onClick={closeModal}>
      {children}
    </div>
  );
};

export default Modal;
