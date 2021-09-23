import React from "react";
import { useState } from "react";
import { Story } from "../../../interfaces/interface";

interface Props {
  item: Story;
}
const StoryItem = ({ item }: Props) => {
  const [isConfirmed, setConfirmed] = useState<boolean>(false);
  const onClicked = () => {
    setConfirmed((state) => !state);
  };

  return (
    <li className="storyItem" onClick={onClicked}>
      <figure
        className={`${isConfirmed ? "hello" : "hello"}`}
        onClick={onClicked}
      >
        <span>
          <img
            className="storyItem__boredr"
            src={isConfirmed ? "../imgs/story2.png" : "../imgs/story1.png"}
            alt="테두리"
            width="56"
          />
        </span>
        <img className="storyItem__img" src={item.src} alt="" />
        <figcaption className="storyItem__name">{item.name}</figcaption>
      </figure>
    </li>
  );
};

export default StoryItem;
