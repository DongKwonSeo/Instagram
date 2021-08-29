import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PostEditer from "../components/post/postLIst/editer";

interface PARAM {
  id: string;
}

const Post = () => {
  const param = useParams<PARAM>();

  const { data } = useQuery(
    "getFeedById",
    async () => {
      return await axios.get(`http://localhost:5000/api/content/${param.id}`);
    },
    {
      enabled: !!param.id,
    }
  );
  return (
    <div className="post">
      <div className="container">
        <PostEditer />
      </div>
    </div>
  );
};

export default Post;
