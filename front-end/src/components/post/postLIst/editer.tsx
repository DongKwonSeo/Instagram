import React, { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { useHistory } from "react-router-dom";
// components
import PostHeader from "./header";
import PostForm from "./postForm";
import PostShare from "./share";
import PostTag from "./postTag";

const PostEditer = () => {
  const history = useHistory();
  const [text, setText] = useState<string>("");
  const [files, setfiles] = useState<string | Blob>("");
  const [img, setImage] = useState<string>("../imgs/imgForm.png");

  // handleSubmit
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const config: AxiosRequestConfig = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      formData.append("image", files);
      formData.append("user_nickname", "서동권");
      formData.append("text", text);

      await axios.post("http://localhost:5000/api/content", formData, config);
      // Router History
      history.push("/");
    } catch (error) {
      console.log(error);
      alert("실패하였습니다");
    }
  };

  const onChangeFileReader = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) {
      return;
    }
    const file = fileList[0];
    // Data Upload
    setfiles(file);

    const image = URL.createObjectURL(file);
    //image priview
    setImage(image);
  };
  // const onChangeFileReader = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files[0]) {
  //     return;
  //   }

  //   const file = e.target.files[0];
  //   // Data Upload
  //   setfiles(file);

  //   const Image = URL.createObjectURL(file);
  //   //image priview
  //   setImage(Image);
  // };

  return (
    <div className="postEditer">
      {/* --*/}
      <PostHeader handleSubmit={handleSubmit} />
      {/* 이미지 추가 */}
      <PostForm
        onChangeFiles={onChangeFileReader}
        setText={setText}
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
