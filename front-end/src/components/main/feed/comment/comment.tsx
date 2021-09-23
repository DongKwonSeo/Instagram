import React from "react";
import { COMMENT } from "../../../../interfaces/interface";
import { Link } from "react-router-dom";
import CommentItem from "./item";

interface Props {
  commentList: [COMMENT];
  feedId: string;
  toggleModal: () => void;
}

const Comments = ({ commentList, feedId, toggleModal }: Props) => {
  const previewList = commentList.slice(-3);

  return (
    <div className="comment">
      <div>
        {commentList.length >= 3 && (
          <Link to={`/commentList/${feedId}`} className="comment__total">
            댓글 {commentList.length}개 모두보기
          </Link>
        )}
      </div>

      <div className="comment__item">
        {previewList.map((item) => (
          <CommentItem
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
