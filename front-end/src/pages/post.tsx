import React from "react";
// import axios from "axios";
// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import PostEditer from "../components/post/postLIst/editer";
import PostModify from "../components/post/postLIst/modify";

export interface PARAM {
  id: string;
}

const Post = () => {
  // const param = useParams<PARAM>();
  // const { data } = useQuery(
  //   "getFeedById",
  //   async () => {
  //     return await axios.get(`http://localhost:5000/api/content/${param.id}`);
  //   },
  //   {
  //     enabled: !!param.id,
  //   }
  // );

  return (
    <div className="post">
      <div className="container">
        {/* <PostEditer /> */}
        <PostModify />
      </div>
    </div>
  );
};

export default Post;
