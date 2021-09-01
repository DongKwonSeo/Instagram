import React from "react";

const CommentList = () => {
  return (
    <section className="CommentList ">
      <figure className="CommentList__imgList">
        <img className="CommentList__img" src="../imgs/feedimg.jpeg" alt="" />
      </figure>
      <article className="CommentList__total">
        {/* user 이름 */}
        <div className="smallContainer">
          <header className="user padding">
            <img
              className="user__img"
              src="../storyItem.jpeg"
              alt="유저이미지"
            />
            {/* user Name */}
            <div className="user__wrap">
              <span className="user__name">hahah</span>
              {/* user icon */}
              <span className="user__icon">
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
              </span>
            </div>
          </header>
        </div>
      </article>
    </section>
  );
};

export default CommentList;
