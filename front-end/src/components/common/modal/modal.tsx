import React from "react";
import { Link } from "react-router-dom";

interface Props {
  feedId: string;
  closeModal: () => void;
}

const Modal = ({ feedId, closeModal }: Props) => {
  return (
    <>
      <article className="modal" onClick={closeModal}>
        <div className="modal__box" onClick={(e) => e.stopPropagation()}>
          <div className="modal__list container">
            <span className="modal__item">신고</span>
            <Link className="modal__item" to={`/post/${feedId}`}>
              수정
            </Link>
            <span className="modal__item" onClick={closeModal}>
              취소
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Modal;
