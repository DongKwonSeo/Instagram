import React from "react";
import { Link } from "react-router-dom";

const PostHeader = () => {
  return (
    <header className="postHeader padding ">
      <Link to="/">
        <i className="fas fa-chevron-left"></i>
      </Link>
      <h1>새 게시물</h1>
      <span>공유</span>
    </header>
  );
};

export default PostHeader;
