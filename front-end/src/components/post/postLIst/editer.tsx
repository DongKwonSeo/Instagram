import React, { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import PostHeader from "./header";
import PostForm from "./postForm";
import PostShare from "./share";
import PostTag from "./postTag";

const PostEditer = () => {
  const [text, setText] = useState<string>("");
  const [files, setfiles] = useState<string[] | any>();
  const [img, setImage] = useState<string>("../imgs/imgForm.png");

  // handleSubmit
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      const config: AxiosRequestConfig = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const inform = new FormData();
      inform.append("image", files);
      inform.append("user_nickname", "서동권");
      inform.append("text", text);

      await axios.post("http://localhost:5000/api/content", inform, config);
      alert("성공했습니다");
    } catch (error) {
      console.log(error);
      alert("실패하였습니다");
    }
  };

  const onChangeFileReader = (e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    const file = e.target.files[0];
    // Data Upload
    setfiles(file);

    const Image = URL.createObjectURL(file);
    //image priview
    setImage(Image);
  };

  return (
    <div className="postEditer">
      {/* --*/}
      <PostHeader handleSubmit={handleSubmit} />
      {/* 이미지 추가 */}
      <PostForm
        onChangeText={setText}
        onChangeFiles={onChangeFileReader}
        img={img}
        text={text}
      />
      {/* 태그하기 */}
      <PostTag title={"사람 태그하기"} />
      <PostTag title={"위치 추가"} />
      {/* 공유하기  */}
      <PostShare title={"Facebook"} id={"check1"} />
      <PostShare title={"Twitter"} id={"check2"} />
      <PostShare title={"Tumbir"} id={"check3"} />
    </div>
  );
};

export default PostEditer;
