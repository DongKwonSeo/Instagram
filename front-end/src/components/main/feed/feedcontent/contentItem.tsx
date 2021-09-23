import React from "react";
import { FEEDITEM } from "../../../../interfaces/interface";

interface Props {
  item: FEEDITEM;
}
const ContentItem = ({ item }: Props) => {
  return (
    <div className="contentItem ">
      {/* content 이름  */}
      <strong className="contentItem__user">{item.user_nickname}</strong>
      {/* content 내용 */}
      <span>{item.text}</span>
    </div>
  );
};

export default ContentItem;
