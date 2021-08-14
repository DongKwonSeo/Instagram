import React from "react";
import Content from "../feedcontent/content";
import FeedImg from "./feedImg";
import User from "../user";

const FeedItem = () => {
  return (
    <>
      <User />
      <FeedImg />
      <Content />
    </>
  );
};

export default FeedItem;
