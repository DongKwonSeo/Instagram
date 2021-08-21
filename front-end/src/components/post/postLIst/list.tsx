import React, { FC } from "react";
import PostHeader from "./header";
import PostImg from "./Img";
import PostShare from "./share";
import PostTag from "./postTag";

interface POSTSHARE {
  title: string;
  id?: string;
}

const PostList: FC = () => {
  return (
    <div className="PostList">
      <PostHeader />
      {/* 이미지 추가 */}
      <PostImg />
      {/* 태그하기 */}
      <PostTag title={"사람 태그하기"} />
      <PostTag title={"위치 추가"} />
      {/* 공유하기  */}

      <PostShare title={"Facebook"} id={"check1"} />
      <PostShare title={"Twitter"} id={"check2"} />
      <PostShare title={"Tumbir"} id={"check3"} />
    </div>
  );
};

export default PostList;
