import React from "react";
import Content from "../feedcontent/content";
import FeedImg from "./feedImg";
import FeedHeader from "../user";

const FeedItem = () => {
  return (
    <>
      <FeedHeader />
      <FeedImg />
      <Content />
    </>
  );
};

export default FeedItem;
