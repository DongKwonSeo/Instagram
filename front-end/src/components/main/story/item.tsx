import React from "react";
import { Story } from "../../../interfaces/interface";

interface Props {
  item: Story;
}
const StoryItem = ({ item }: Props) => {
  return (
    <li className="storyItem">
      <figure>
        <img className="storyItem__img" src={item.src} alt="" />
        <figcaption className="storyItem__name">{item.name}</figcaption>
      </figure>
    </li>
  );
};

export default StoryItem;
