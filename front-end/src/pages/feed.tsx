import React from "react";
import FeedItem from "../components/main/feed/Item";
import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";

export interface FEEDITEM {
  id: string;
  user_nickname?: string;
  text?: string;
  image?: string;
  like?: number;
}

const Feed = () => {
  // const [item,se]
  //1.Create Hook Get Feed List Backend
  //2.Feed * for list count
  //3. Feed Item props list[index] item

  const { isLoading, error, data } = useQuery<AxiosResponse<any> | undefined>(
    "feedItem",
    () => axios("http://localhost:5000/api/content")
  );
  return (
    <article className="feedList ">
      {data?.data.contents.map((item: FEEDITEM, key: number) => (
        <FeedItem item={item} key={key} />
      ))}
    </article>
  );
};

export default Feed;
