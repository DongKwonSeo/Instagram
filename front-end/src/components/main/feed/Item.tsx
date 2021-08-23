import React from "react";
import Content from "./feedcontent/content";
// import FeedCarousel from "./Carousel";
import User from "./feedItem/user";
import { FEEDITEM } from "../../../pages/feed";

interface Props {
  item: FEEDITEM;
}
const FeedItem = ({ item }: Props) => {
  // props Feed Item
  // Feed.user_nickname
  // Fedd.img
  // Fedd Comments pros Comments , contents.
  return (
    <div className="feedItem">
      <User />
      {/* {data.length > 1 ? (
        <FeedCarousel />
        ) : ( */}
      <img className="feedImg" src="../imgs/feedimg.jpeg" alt="피드 이미지" />
      {/* )} */}
      <Content />
    </div>
  );
};

export default FeedItem;
