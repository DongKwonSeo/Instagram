import React from "react";
import Content from "./content/content";
import FeedImg from "./feedImg";
import FeedHeader from "./header";

const FeedList = () => {
  return (
    <div className="FeedList">
      <FeedHeader />
      <FeedImg />
      <Content />
    </div>
  );
};

export default FeedList;
