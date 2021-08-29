import React from "react";
import { Link } from "react-router-dom";
interface Props {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const PostHeader = ({ handleSubmit }: Props) => {
  return (
    <div className="postHeader">
      <span className="postHeader__btn">
        <Link to="/">
          <i className="fas fa-chevron-left"></i>
        </Link>
      </span>
      <h2>새 게시물</h2>
      <span className="postHeader__submit" onClick={handleSubmit}>
        공유
      </span>
    </div>
  );
};

export default PostHeader;
