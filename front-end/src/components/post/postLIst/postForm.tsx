import React from "react";

// useForm 사용
interface Props {
  setText: (value: string) => void;
  // onChangeText: (value: string) => void;
  onChangeFiles: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  img: string;
}

const PostForm = ({ setText, onChangeFiles, text, img }: Props) => {
  const onfileClick = () => {
    const imgtag: HTMLElement | null = document.getElementById("test");
    imgtag?.click();
  };

  // handleChange
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="postImg padding_big">
      <input id="test" hidden type="file" onChange={onChangeFiles} />
      <img onClick={onfileClick} src={img} alt="이미지업로드" />

      <textarea
        placeholder="문구 입력..."
        className="textarea"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default PostForm;
