import React from "react";
import SwitchButton from "../../common/button/switchButton";

interface Props {
  title: string;
  id: string;
}
const PostShare = ({ title, id }: Props) => {
  return (
    <div className="postShare padding">
      <span>{title}</span>
      <SwitchButton id={"check1"} />
    </div>
  );
};

export default PostShare;
