import React, { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { useHistory, useParams } from "react-router-dom";
// components
import PostHeader from "./header";
import PostForm from "./postForm";
import PostShare from "./share";
import PostTag from "./postTag";
import { useQuery } from "react-query";
import { PARAM } from "../../../interfaces/interface";
import Useform from "../../../hooks/useForm";

// const initForm = {
//   user_nickname: user.name,
//   text: "",
//   img: "",
// };

const PostModify = () => {
  const param = useParams<PARAM>();
  const history = useHistory();
  const { form, handleChange, setForm } = Useform();
  const [files, setfiles] = useState<string | Blob>("");
  const [img, setImage] = useState<string>("../imgs/imgForm.png");

  const feedId = param.id;

  // 수정 data

  useQuery(
    "edit",
    async () => {
      const res = await axios.get(
        `http://localhost:5000/api/content/${feedId}`
      );
      setImage(res.data.content.image);
      setForm({
        // user_nickname:res.data.content.user_nickanme,
        text: res.data.content.text,
      });
    },
    {
      enabled: !!feedId,
    }
  );

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

  // handleSubmit
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const config: AxiosRequestConfig = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.append("user_nickname", "서동권");
      formData.append("image", files);
      formData.append("text", form.text);

      const params = [formData, config];

      feedId ? updateFeed(params) : addFeed(params);
      // Router History
      history.push("/");
    } catch (error) {
      console.log(error);
      alert("실패하였습니다");
    }
  };

  const updateFeed = async (params: any) => {
    await axios.put(`http://localhost:5000/api/content/${feedId}`, ...params);
  };

  const addFeed = async (params: any) => {
    await axios.post(`http://localhost:5000/api/content`, ...params);
  };

  // useEffect(() => {
  //   const content = responseContent?.content || [];

  //   if (content) {
  //     // onChangeForm(content.user_nickname, content.text, content.img);
  //   }
  // }, [responseContent]);

  return (
    <div className="postEditer">
      {/* --*/}
      <PostHeader
        handleSubmit={handleSubmit}
        submitLabel={feedId ? "수정" : "게시"}
        title={feedId ? "게시글 수정" : "게시글 게시"}
      />
      {/* 이미지 추가 */}
      <PostForm
        img={img}
        text={form.text}
        handleChange={handleChange}
        onChangeFiles={onChangeFileReader}
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

export default PostModify;
