import React from "react";

const StoryItem = () => {
  return (
    <div className="storyItem">
      <div className="storyItem__wrap">
        <img
          className="storyItem__img"
          src="../storyItem.jpeg"
          alt="스토리 사진 "
        />
        <p className="storyItem__name">cake.english</p>
      </div>
    </div>
  );
};

export default StoryItem;
