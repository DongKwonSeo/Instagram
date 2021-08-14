import React from "react";
import Comment from "./comment";
import ContentList from "./contentList";
import ContentHeader from "./feedIcon";

const Content = () => {
  return (
    <div className="content padding">
      <ContentHeader />
      <ContentList />
      <Comment />
    </div>
  );
};

export default Content;
