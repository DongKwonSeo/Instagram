import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";

interface Props {
  feedId: string;
  closeModal: (modalId: string) => void;
}

const FeedOption = ({ feedId, closeModal }: Props) => {
  const [open, setOpen] = useState<boolean>(true);

  const close = () => {
    setOpen(!open);
  };
  return (
    <Modal feedId={feedId} closeModal={() => closeModal("feedoption")}>
      <div className="feedOption" onClick={(e) => e.stopPropagation()}>
        <span className="feedOption__item">신고</span>
        <Link className="feedOption__item" to={`/post/${feedId}`}>
          수정
        </Link>
        <span
          className="feedOption__item"
          onClick={() => closeModal("feedoption")}
        >
          취소
        </span>
      </div>
    </Modal>
  );
};

export default FeedOption;
