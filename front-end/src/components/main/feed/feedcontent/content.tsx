import React from "react";
// interface
// components
import CommentForm from "../comment/form";
import FeedIcon from "./Icon";
import ContentItem from "./contentItem";
import Comments from "../comment/comment";
import axios from "axios";
import { useState } from "react";
import { FEEDITEM, COMMENT } from "../../../../interfaces/interface";

// import ContentHeader from "./Icon";

interface Props {
  item: FEEDITEM;
}

const Content = ({ item }: Props) => {
  const [comments, Setcomments] = useState<[COMMENT]>(item.comments);

  // get 게시물 하나만 가지고 오기
  const onChange = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/content/${item.id}`
    );
    Setcomments(data.content.comments);
  };

  return (
    <div className="content padding">
      <FeedIcon item={item} />
      <ContentItem item={item} />
      <Comments commentList={comments} feedId={item.id} />
      <CommentForm item={item} onChange={onChange} />
    </div>
  );
};

export default Content;
