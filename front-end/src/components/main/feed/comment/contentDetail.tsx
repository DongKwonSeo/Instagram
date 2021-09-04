import axios from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PARAM, FEEDITEM, COMMENT } from "../../../../interfaces/interface";
import Modal from "../../../common/modal/modal";
import User from "../feedItem/user";

const ContentDetail = () => {
  const [item, setItem] = useState<FEEDITEM>({
    id: "",
    user_nickname: "",
    text: "",
    image: "",
    like: 0,
    comments: [
      {
        cratedAt: "",
        updatedAt: "",
        _id: "",
        user_nickname: "",
        comment_text: "",
        content: "",
        id: "",
      },
    ],
  });
  const [modal, setmodal] = useState<boolean>(false);
  const param = useParams<PARAM>();
  const feedId = param.id;
  useQuery(
    "edit",
    async () => {
      const res = await axios.get(
        `http://localhost:5000/api/content/${feedId}`
      );
      setItem(res.data.content);
    },
    {
      enabled: !!feedId,
    }
  );
  const toggleModal = () => {
    setmodal((state) => !state);
  };

  return (
    <>
      <section className="contentDetail ">
        <figure className="contentDetail__imgList">
          <img className="contentDetail__img" src={item?.image} alt="" />
        </figure>

        <article className="contentDetail__total">
          {/* user 이름 */}

          <User item={item} toggleModal={toggleModal} />
          {/*  */}
        </article>
      </section>
      {modal && <Modal feedId={item.id} closeModal={toggleModal} />}
    </>
  );
};

export default ContentDetail;
