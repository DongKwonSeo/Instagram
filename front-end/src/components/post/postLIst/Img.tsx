import React, { ChangeEvent } from "react";
import { useState } from "react";

const PostImg = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [files, setfiles] = useState<string[]>();
  const [img, setImage] = useState<string>("../imgs/imgForm.png");

  const onfileClick = () => {
    const imgtag = document.getElementById("test");
    imgtag?.click();
  };

  // const config = {
  //   header: {
  //     "content-type": "multipart/form-data",
  //   },
  //   withCredentials: true,
  // };
  // const formdata = new FormData();
  // formdata.append("file", files);
  // any 타입 변경 하기
  const onChangeFileReader = (e: any) => {
    if (!e.target.files[0]) {
      // const file = null;
      setfiles(files);
      setImage("../imgs/imgForm.png");
      return;
    }
    const file = e.target.files[0];
    setfiles(file);
    const Image = URL.createObjectURL(file);
    setImage(Image);
  };
  return (
    <div className="postImg padding_big">
      <input id="test" hidden type="file" onChange={onChangeFileReader} />
      <img onClick={onfileClick} src={img} alt="이미지업로드" />
      {/* 
      <textarea
        value={textAreaValue}
        onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
          setTextAreaValue(ev.target.value)
        }
      /> */}
    </div>
  );
};

export default PostImg;
