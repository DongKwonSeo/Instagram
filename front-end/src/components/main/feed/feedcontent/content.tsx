import React from "react";
// interface
import { FEEDITEM } from "../../../../pages/feed";
import { COMMENT } from "../../../../interfaces/interface";
// components
import CommentForm from "./form";
import FeedIcon from "./Icon";
import Comment from "./comment";
import ContentItem from "./contentItem";

import { useQuery } from "react-query";
import axios from "axios";

// import ContentHeader from "./Icon";

interface Props {
  item: FEEDITEM;
  comment?: Comment;
}
const Content = ({ item }: Props) => {
  const { data: response } = useQuery("coment", () =>
    axios.get("http://localhost:5000/api/comment")
  );

  return (
    <div className="content padding">
      <FeedIcon item={item} />
      <ContentItem item={item} />
      {response?.data.comments.map((comment: COMMENT, key: COMMENT) => {
        return <Comment comment={comment} key={comment.id} />;
      })}
      <CommentForm />
    </div>
  );
};

export default Content;
