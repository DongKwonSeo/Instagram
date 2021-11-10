import React, { ReactNode, useEffect } from "react";
interface Props {
  closeModal: (type: string) => void;
  children?: ReactNode;
}

const Modal = ({ closeModal, children }: Props) => {
  // modal 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [closeModal]);
  return (
    <div className="modal" onClick={() => closeModal("")}>
      {children}
    </div>
  );
};

export default Modal;
