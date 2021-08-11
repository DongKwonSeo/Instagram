import React from "react";
import Comment from "./comment";
import ContentList from "./contentList";
import ContentHeader from "./header";

const Content = () => {
  return (
    <div className="content">
      <ContentHeader />
      <ContentList />
      <Comment />
    </div>
  );
};

export default Content;
