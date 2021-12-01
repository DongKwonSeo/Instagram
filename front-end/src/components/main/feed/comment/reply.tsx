import React from "react";
import { REPLY } from "../../../../interfaces/interface";

interface Props {
  ismodal: boolean;
  reply: REPLY;
}

const Reply = ({ reply, ismodal }: Props) => {
  return (
    <div className="comment__box">
      <div className="comment__left">
        {ismodal && (
          <p className="comment__img">
            <img src="../storyItem.jpeg" alt="userImg" />
          </p>
        )}
        <ul className="comment__list">
          <li className="comment__desc">
            {/* content 이름  */}

            <strong className="comment__user">{reply.user_nickname}</strong>
            {/* <strong className="comment__user">{comment.user_nickname}</strong> */}

            {/* content 내용 */}
            {/* <span>댓글 내용</span> */}
            <span>{reply.comment_text}</span>

            {/* modal */}
            {/* {modalType === "commentDetail" && (
            <em
              className="comment__modal"
              onClick={() => toggleModal("feedoption")}
            >
              <svg
                aria-label="옵션 더 보기"
                className="_8-yf5 "
                fill="#262626"
                height="16"
                role="img"
                viewBox="0 0 48 48"
                width="16"
              >
                <circle
                  clipRule="evenodd"
                  cx="8"
                  cy="24"
                  fillRule="evenodd"
                  r="4.5"
                ></circle>
                <circle
                  clipRule="evenodd"
                  cx="24"
                  cy="24"
                  fillRule="evenodd"
                  r="4.5"
                ></circle>
                <circle
                  clipRule="evenodd"
                  cx="40"
                  cy="24"
                  fillRule="evenodd"
                  r="4.5"
                ></circle>
              </svg>
            </em>
          )} */}

            {/* {profile &&
              (replyCheck ? (
                <span onClick={onReplyCheck}>답글 보기(1개)</span>
              ) : (
                <span onClick={onReplyCheck}>답글 숨기기</span>
              ))} */}

            {/* {profile &&
              (replyCheck ? (
                <span onClick={onReplyCheck}>답글 보기(1개)</span>
              ) : (
                <span onClick={onReplyCheck}>답글 숨기기</span>
              ))} */}
          </li>
          {/* <Reply /> */}
        </ul>
      </div>
    </div>
  );
};

export default Reply;
