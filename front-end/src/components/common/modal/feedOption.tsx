import React, { useState } from "react";
import Modal from "./modal";

interface Props {
  feedId: string;
  closeModal: () => void;
}

const FeedOption = ({ feedId, closeModal }: Props) => {
  return (
    <Modal feedId={feedId} closeModal={closeModal}>
      <div className="feedOption" onClick={(e) => e.stopPropagation()}>
        <span className="feedOption__item">신고</span>
        <span className="feedOption__item">수정</span>
        <span
          className="feedOption__item"
          onClick={closeModal}
        >
          취소
        </span>
      </div>
    </Modal>
  );
};

export default FeedOption;
