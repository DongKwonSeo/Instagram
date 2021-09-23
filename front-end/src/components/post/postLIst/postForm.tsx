import React from "react";

interface Props {
  onChangeFiles: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  img: string;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const PostForm = ({ handleChange, onChangeFiles, text, img }: Props) => {
  const onfileClick = () => {
    const imgtag: HTMLElement | null = document.getElementById("test");
    imgtag?.click();
  };

  return (
    <div className="postImg padding_big">
      <div className="postImg__box">
        <input id="test" hidden type="file" onChange={onChangeFiles} />
        <img
          className="postImg__img"
          onClick={onfileClick}
          // img 변경하기 !!!!
          src={img || "../imgs/imgForm.png"}
          alt="이미지업로드"
        />
      </div>
      <textarea
        placeholder="문구 입력..."
        className="textarea"
        name="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default PostForm;
