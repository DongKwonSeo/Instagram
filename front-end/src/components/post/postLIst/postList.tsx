import React from "react";
import PostHeader from "./postHeader";
import PostImg from "./postImg";
import PostShare from "./postShare";
import PostTag from "./postTag";

const PostList = () => {
  return (
    <>
      <PostHeader />
      <PostImg />
      <PostTag />
      <PostTag />
      <PostShare />
      <PostShare />
      <PostShare />
    </>
  );
};

export default PostList;
