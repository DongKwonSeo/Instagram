import React from "react";
import Header from "../components/layout/header/header";
import Feed from "./feed";
import StoryList from "../components/main/story/list";
import { FEEDITEM } from "../interfaces/interface";

interface Props {
  item: FEEDITEM;
}
const Index = ({ item }: Props) => {
  return (
    <>
      <Header />
      <StoryList />
      <Feed item={item} />
    </>
  );
};

export default Index;
