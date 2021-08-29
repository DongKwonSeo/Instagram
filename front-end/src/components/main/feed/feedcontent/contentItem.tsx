import React from "react";
import { FEEDITEM } from "../../../../pages/feed";

interface Props {
  item: FEEDITEM;
}
const ContentItem = ({ item }: Props) => {
  return (
    <div className="contentItem">
      <div className="contentItem__wrap container">
        <ul className="contentItem__item padding">
          <li>
            {/* content 이름  */}
            <strong className="contentItem__user">{item.user_nickname}</strong>
            {/* content 내용 */}
            {item.text}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentItem;
