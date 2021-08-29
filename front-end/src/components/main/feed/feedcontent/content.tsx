import React from "react";
import { FEEDITEM } from "../../../../pages/feed";
import CommentInput from "./input";
import FeedIcon from "./Icon";
import Comment from "./comment";
import ContentItem from "./contentItem";
// import ContentHeader from "./Icon";

interface Props {
  item: FEEDITEM;
}
const Content = ({ item }: Props) => {
  //Feed pors content , comments
  return (
    <div className="content padding">
      <FeedIcon item={item} />
      <ContentItem item={item} />
      <Comment item={item} />
      <CommentInput />
      {/* 여기로 가지고 오는데 */}
      {/* 댓글을 여기로 가지고 온다  */}
      {/*i wil fix these  */}
    </div>
  );
};

export default Content;
