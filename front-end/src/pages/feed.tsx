import React, { useMemo } from "react";
import FeedItem from "../components/main/feed/feedItem/Item";
import { useQuery } from "react-query";
import axios from "axios";
import { FEEDITEM } from "../interfaces/interface";
import Slider from "react-slick";

interface Props {
  item: FEEDITEM;
}
// 변수명 변경

const Feed = ({ item }: Props) => {
  const { data: responseFeedList } = useQuery("feedList", () =>
    axios.get("http://localhost:5000/api/content")
  );

  const feedList = useMemo(
    () => responseFeedList?.data.contents || [],
    [responseFeedList]
  );

  return (
    <article className="feedList ">
      {feedList
        .map((item: FEEDITEM) => (
          <FeedItem children item={item} key={item.id} />
        ))
        .reverse()}
    </article>
  );
};

export default Feed;
