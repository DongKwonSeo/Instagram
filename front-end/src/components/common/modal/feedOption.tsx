import React from "react";

interface Props {
  feedId: string;
  closeModal: () => void;
}

const FeedOption = ({ feedId, closeModal }: Props) => {
  return {
    /* <div className="feedOption" onClick={(e) => e.stopPropagation()}>
        <span className="feedOption__item">신고</span>
        <span className="feedOption__item">수정</span>
        <span className="feedOption__item" onClick={closeModal}>
          취소
        </span>
      </div> */
  };
};

export default FeedOption;
