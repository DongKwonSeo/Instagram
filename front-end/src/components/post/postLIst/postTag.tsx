import React from "react";

interface Props {
  title: string;
}
const PostTag = ({ title }: Props) => {
  return (
    <div className="PostTag padding">
      <span>{title}</span>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

export default PostTag;
