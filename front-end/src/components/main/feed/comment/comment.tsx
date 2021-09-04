import React from "react";
import { COMMENT } from "../../../../interfaces/interface";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  commentList: [COMMENT];
  feedId: string;
}

const Comments = ({ commentList, feedId }: Props) => {
  const [onLike, setOnLike] = useState<boolean>(false);

  const onClickHandler = () => {
    setOnLike(() => !onLike);
  };
  // commentList = commentList.map((item) => item).reverse();
  return (
    <div className="comment container">
      <div>
        {commentList.length >= 3 && (
          <Link to={`/commentList/${feedId}`}>
            <p className="comment__total">
              댓글 {commentList.length}개 모두보기
            </p>
          </Link>
        )}
      </div>
      <div className="comment__item padding">
        {commentList
          .map((item: COMMENT, key: number) => {
            return (
              <div className="comment__box" key={key}>
                <ul>
                  <li>
                    {/* content 이름  */}
                    <strong className="comment__user">
                      {item.user_nickname}
                    </strong>
                    {/* content 내용 */}
                    {item.comment_text}
                  </li>
                </ul>
                {/* 좋아요 Icon */}
                <span className="comment__icon" onClick={onClickHandler}>
                  <svg
                    aria-label="좋아요"
                    className="_8-yf5 "
                    fill={onLike ? "#ed4956" : "#262626"}
                    height="12"
                    role="img"
                    viewBox="0 0 48 48"
                    width="12"
                  >
                    {/* onLike  */}
                    {onLike ? (
                      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    ) : (
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    )}
                  </svg>
                </span>
              </div>
            );
          })
          .reverse()
          .slice(0, 3)}
      </div>
    </div>
  );
};

export default Comments;
