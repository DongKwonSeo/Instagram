import React from "react";
import FeedItem from "../components/main/feed/feedItem/Item";
import { useQuery } from "react-query";
import axios from "axios";
import { COMMENT } from "../interfaces/interface";

export interface FEEDITEM {
  id: string;
  user_nickname?: string;
  text: string;
  image: string;
  like: number;
  comments: [COMMENT];
}
// 변수명 변경

// const getContent = async (): Promise<FEEDITEM | void> => {
//   await axios("http://localhost:5000/api/content");
// };

const Feed = () => {
  // const { data, isLoading, error } = useQuery<Data, ErrorConstructor>(
  //   "feedItem",
  //   getContent
  // );

  const { data: responseFeedList, error } = useQuery<any, Error>(
    "feedList",
    () => axios.get("http://localhost:5000/api/content")
  );

  return (
    <article className="feedList ">
      {responseFeedList?.data.contents
        .map((item: FEEDITEM) => <FeedItem item={item} key={item.id} />)
        .reverse()}
    </article>
  );
};

export default Feed;
