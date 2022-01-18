import React from "react";
import { COMMENT } from "../../../../interfaces/interface";
import CommentItem from "./item";

interface Props {
  commentList: [COMMENT];
  feedId: string;

  toggleModal: (type: string) => void;
}

const Comments = ({ commentList, feedId, toggleModal }: Props) => {
  const previewList = commentList.slice(-3);

  return (
    <div className="comment">
      <div>
        {commentList.length >= 3 && (
          <span
            onClick={() => toggleModal("detail")}
            className="comment__total"
          >
            댓글 {commentList.length}개 모두보기
          </span>
        )}
      </div>

      <div className="comment__item">
        {previewList.map((item) => (
          <CommentItem
            ismodal={false}
            comment={item}
            key={item.id}
            feedId={feedId}
            toggleModal={toggleModal}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
