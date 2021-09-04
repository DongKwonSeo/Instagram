import { useState, FormEvent } from "react";
import axios from "axios";
import { FEEDITEM } from "../../../../interfaces/interface";

interface Props {
  item: FEEDITEM;
  onChange: () => void;
  // comment?: Comment;
}

const CommentForm = ({ item, onChange }: Props) => {
  const [comment, setComment] = useState<string>("");

  const onSumnit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = {
        content_id: item.id,
        comment_text: comment,
        user_nickname: "인스타그램",
      };
      await axios.post("http://localhost:5000/api/comment", data);
      await onChange();
      setComment("");
    } catch (error) {
      console.log(error);
      alert("실패입니다");
    }
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="commentForm ">
      {/* <h2>댓글입력</h2> */}
      {/* icon  */}
      <div className="commentForm__wrap container">
        <span className="commentForm__icon">
          <svg
            aria-label="이모티콘"
            className="_8-yf5 "
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
            <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
          </svg>
        </span>
        {/* Input */}
        <form className="commentForm__form" onSubmit={onSumnit}>
          <input
            className="commentForm__input"
            type="text"
            placeholder="댓글 달기 .."
            value={comment}
            onChange={onChangeHandler}
          />
          <button type="submit" className="commentForm__button">
            게시
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
