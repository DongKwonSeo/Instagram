import axios from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PARAM, FEEDITEM, COMMENT } from "../../../../interfaces/interface";
import Modal from "../../../common/modal/modal";
import CommentForm from "../comment/form";
import CommentItem from "../comment/item";
import FeedIcon from "../feedcontent/Icon";
import User from "../feedItem/user";
import DetailItem from "./item";

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
  const [comments, setComments] = useState<COMMENT[]>(item.comments);
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
      setComments(res.data.content.comments);
    },
    {
      enabled: !!feedId,
    }
  );
  const toggleModal = () => {
    setmodal((state) => !state);
  };

  const updateCommentList = async () => {};

  return (
    <>
      <section className="contentDetail ">
        <figure className="contentDetail__imgList">
          <img className="contentDetail__img" src={item?.image} alt="" />
        </figure>

        <article className="contentDetail__total ">
          {/* user 이름 */}
          <div className=" contentDetail__wrap">
            <User item={item} toggleModal={toggleModal} />
          </div>

          {/*user content   */}
          <div className="contentDetail__item ">
            <DetailItem item={item} toggleModal={toggleModal} />

            {/* CommentItem 댓글 */}
            <div className="contentDetail__list  ">
              {comments.map((item) => {
                return (
                  <CommentItem
                    comment={item}
                    key={item.id}
                    feedId={feedId}
                    toggleModal={toggleModal}
                  />
                );
              })}
            </div>
          </div>
          {/* Icon 좋아요  */}
          <div className="contentDetail__icon">
            <FeedIcon item={item} />
          </div>

          {/* Comment Form 댓글달기  */}
          <div className="contentDetail__form">
            <CommentForm item={item} updateCommentList={updateCommentList} />
          </div>
        </article>
      </section>
      {modal && <Modal feedId={item.id} closeModal={toggleModal} children />}
    </>
  );
};

export default ContentDetail;
