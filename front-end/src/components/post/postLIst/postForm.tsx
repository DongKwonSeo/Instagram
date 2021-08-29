import { Dispatch } from "react";
import { SetStateAction } from "react";

// useForm 사용
interface Props {
  onChangeText: Dispatch<SetStateAction<string>>;
  onChangeFiles: any;
  text: string;
  img: string;
}

const PostForm = ({ onChangeText, onChangeFiles, text, img }: Props) => {
  const onfileClick = () => {
    const imgtag: HTMLElement | null = document.getElementById("test");
    imgtag?.click();
  };

  // handleChange
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeText(e.target.value);
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
