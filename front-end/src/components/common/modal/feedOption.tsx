import React from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";

interface Props {
  feedId: string;
  closeModal: (type: string) => void;
}

const FeedOption = ({ feedId, closeModal }: Props) => {
  return (
    <>
      <Modal closeModal={() => closeModal("")}>
        <div className="feedOption" onClick={(e) => e.stopPropagation()}>
          <span className="feedOption__item">신고</span>
          <Link className="feedOption__item" to={`/post/${feedId}`}>
            <span>수정</span>
          </Link>
          <span className="feedOption__item" onClick={() => closeModal("")}>
            취소
          </span>
        </div>
      </Modal>
    </>
  );
};

export default FeedOption;
