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
      <Link to="/" className="postHeader__prev">
        <i className="fas fa-chevron-left"></i>
      </Link>
      <h2 className="postHeader__title">{title}</h2>
      <button className="postHeader__submit" onClick={handleSubmit}>
        {submitLabel}
      </button>
    </div>
  );
};

export default PostHeader;
