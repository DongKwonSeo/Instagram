import React from "react";
import { useState } from "react";
import { Story } from "../../../interfaces/interface";
import { initStory } from "../../../mock";
import StoryItem from "./item";

const StoryList = () => {
  const [list, setList] = useState<Story[]>(initStory);

  return (
    <ul className="storyList padding">
      {list.map((item, index) => {
        return <StoryItem item={item} key={index} />;
      })}
    </ul>
  );
};

export default StoryList;
