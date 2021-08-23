import React from "react";
import Header from "../components/layout/header/header";
import Feed from "./feed";
import StoryList from "../components/main/story/list";

const Index = () => {
  return (
    <>
      <Header />
      <StoryList />
      <Feed />
    </>
  );
};

export default Index;
