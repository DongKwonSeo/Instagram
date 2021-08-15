import React from "react";
import { STory } from "../../interfaces/interface";

interface Props {
  item: STory;
}
const StoryItem = ({ item }: Props) => {
  return (
    <div className="storyItem">
      <div className="storyItem__wrap">
        <img className="storyItem__img" src={item.src} alt="스토리 사진 " />
        <img src="../" alt="" />
        <span className="storyItem__name">{item.name}</span>
      </div>
    </div>
  );
};

export default StoryItem;
