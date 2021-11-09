import React, { useState } from "react";
import { Story } from "../../../interfaces/interface";

interface Props {
  item: Story;
  onToggleConfirmState: (selectedId: number) => void;
}

const StoryItem = ({ item, onToggleConfirmState }: Props) => {
  const [isConfirmed, setConfirmed] = useState(false);

  const isConfirmedHandler = () => {
    if (!item) return;
    setConfirmed(true);
    onToggleConfirmState(item.id);
  };
  if (!item) return <></>;
  return (
    <li className="storyItem" onClick={isConfirmedHandler}>
      <figure className="hello">
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
