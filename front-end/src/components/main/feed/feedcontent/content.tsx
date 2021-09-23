import React from "react";
// interface
// components
import CommentForm from "../comment/form";
import FeedIcon from "./Icon";
import ContentItem from "./contentItem";
import Comments from "../comment/comment";
import axios from "axios";
import { useState } from "react";
import { FEEDITEM } from "../../../../interfaces/interface";
// import Useform from "../../../../hooks/useForm";

// import ContentHeader from "./Icon";

interface Props {
  item: FEEDITEM;
  toggleModal: () => void;
}

const Content = ({ item, toggleModal }: Props) => {
  const [comments, setComments] = useState(item.comments);
  // const { form, handleChange, setForm } = Useform(initForm);
  // get 게시물 하나만 가지고 오기
  
  const updateCommentList = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/content/${item.id}`
    );
    setComments(data.content.comments);
  };

  return (
    <>
      <div className="content">
        <FeedIcon item={item} />
        <ContentItem item={item} />
        <Comments
          commentList={comments}
          feedId={item.id}
          toggleModal={toggleModal}
        />
      </div>
      <CommentForm item={item} updateCommentList={updateCommentList} />
    </>
  );
};

export default Content;
