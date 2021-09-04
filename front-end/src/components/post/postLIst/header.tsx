import React from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  submitLabel: string;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PostHeader = ({ title, submitLabel, handleSubmit }: Props) => {
  return (
    <div className="postHeader">
      <span className="postHeader__btn">
        <Link to="/">
          <i className="fas fa-chevron-left"></i>
        </Link>
      </span>
      <h2>{title}</h2>
      <span className="postHeader__submit" onClick={handleSubmit}>
        {submitLabel}
      </span>
    </div>
  );
};

export default PostHeader;
