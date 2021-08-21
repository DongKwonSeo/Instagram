import React from "react";
import Header from "../components/layout/header/header";
import FeedList from "../components/main/feed/list";
import StoryList from "../components/main/story/list";

const Index = () => {

 
  return (
    <>
      <Header />
      <StoryList />
      <FeedList />
    </>
  );
};

export default Index;
