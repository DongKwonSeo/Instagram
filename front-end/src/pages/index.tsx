import React, { ReactNode } from "react";
import Header from "../components/layout/header/header";
import Feed from "./feed";
import StoryList from "../components/main/story/list";
import { FEEDITEM } from "../interfaces/interface";

interface Props {
  item: FEEDITEM;
  children: ReactNode;
  closeModal: (modalId: string) => void;
}
const Index = ({ item, children, closeModal }: Props) => {
  return (
    <>
      <Header />
      <StoryList />
      <Feed item={item} children closeModal={closeModal} />
    </>
  );
};

export default Index;
