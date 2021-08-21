import React from "react";
import Comment from "./comment";
import ContentList from "./contentList";
import FeedIcon from "./Icon";
// import ContentHeader from "./Icon";

const Content = () => {
  //Feed pors content , comments
  return (
    <div className="content padding">
      <FeedIcon />
      <ContentList />
      <Comment />
    </div>
  );
};

export default Content;
