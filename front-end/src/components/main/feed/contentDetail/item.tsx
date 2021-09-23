import React from "react";
import { FEEDITEM } from "../../../../interfaces/interface";

interface Props {
  item: FEEDITEM;
  toggleModal: () => void;
}
const DetailItem = ({ item }: Props) => {
  return (
    <section className="detailItem   ">
      <div className="detailItem__infor ">
        <img className="user__img" src="../storyItem.jpeg" alt="유저이미지" />
        <span className="user__name">{item.user_nickname}</span>
        <p className="detailItem__text">{item.text}</p>
      </div>
    </section>
  );
};

export default DetailItem;
