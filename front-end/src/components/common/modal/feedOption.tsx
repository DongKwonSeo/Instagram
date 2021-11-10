import React from "react";
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
          <span className="feedOption__item">수정</span>
          <span className="feedOption__item" onClick={() => closeModal("")}>
            취소
          </span>
        </div>
      </Modal>
    </>
  );
};

export default FeedOption;
