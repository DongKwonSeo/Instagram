import React from "react";
import { useState } from "react";
import { Story } from "../../../interfaces/interface";
import { initStory } from "../../../mock";
import StoryCarousel from "./Crousel";
import StoryItem from "./item";

const StoryList = () => {
  const [list, setList] = useState<Story[]>(initStory);

  const onToggleConfirmState = (selectedId: number) => {
    let selectedItem;
    // eslint-disable-next-line array-callback-return
    // list.map((item) => {
    //   if (item?.id === selectedId) {
    //     selectedItem = item;

    //   }
    // });
    // console.log(selectedItem);
    // const filteredList = list.filter((item) => item?.id !== selectedId);
    // filteredList.push(selectedItem);
    const index = list.findIndex((e: Story) => e!.id === selectedId);
    if (index !== -1) {
      selectedItem = list[index];
      selectedItem!.checked = true;

      list.splice(index, 1);
      list.push(selectedItem);
    }

    setList([...list]);
  };

  return (
    <section className="storyList">
      <ul className="storyList__list ">
        {list.length >= 8 ? (
          <StoryCarousel
            list={list}
            onToggleConfirmState={onToggleConfirmState}
          />
        ) : (
          <>
            {list.map((item, index) => (
              <StoryItem
                item={item}
                key={index}
                onToggleConfirmState={onToggleConfirmState}
              />
            ))}
          </>
        )}
      </ul>
    </section>
  );
};

export default StoryList;
