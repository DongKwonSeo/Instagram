import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { MODAL } from "../../interfaces/interface";

const Modal = ({ setmodal, modal }: MODAL) => {
  const modalsRef = useRef<HTMLInputElement>(null);

  // Modal close  outSide close
  let modalHandeler = (event: any) => {
    if (!modalsRef.current?.contains(event.target)) {
      setmodal(false);
    }
  };

  useEffect(() => {
    // Modal close  outSide close
    document.addEventListener("click", modalHandeler);
    return () => {
      document.removeEventListener("click", modalHandeler);
    };
  }, []);

  return (
    <>
      <article className="modal">
        <div className="modal__box" ref={modalsRef}>
          <div className="modal__wrap container">
            <span>
              <strong>신고</strong>
            </span>
            <span>
              <strong>팔로우 취소 </strong>
            </span>
            <span>게시물 이동</span>
            <span>취소</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Modal;
