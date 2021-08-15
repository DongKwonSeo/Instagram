import React from "react";
import { useState } from "react";
import { STory } from "../../interfaces/interface";
import StoryItem from "./storyItem";

const StoryList = () => {
  const [list, setList] = useState<STory[]>([
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
    {
      name: "cake.english",
      src: "../storyItem.jpeg",
    },
  ]);

  return (
    <div className="storyList padding">
      {list.map((item: STory, key: number) => {
        return <StoryItem item={item} />;
      })}
    </div>
  );
};

export default StoryList;
