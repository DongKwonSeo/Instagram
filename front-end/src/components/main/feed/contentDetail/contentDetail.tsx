import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { FEEDITEM, COMMENT } from "../../../../interfaces/interface";
import FeedOption from "../../../common/modal/feedOption";
import CommentForm from "../comment/form";
import CommentItem from "../comment/item";
import FeedIcon from "../feedcontent/Icon";
import User from "../feedItem/user";
import DetailItem from "./item";
interface Props {
  toggleModal: (type: string) => void;
  feedId: string;
}

const ContentDetail = ({ feedId }: Props) => {
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
        replys: [],
      },
    ],
  });
  const [modal, setModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [comments, setComments] = useState<COMMENT[]>(item.comments);

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

  const updateCommentList = async () => {};
  
  const toggleModal = (type: string) => {
    setModal((state) => !state);
    type && setModalType(type);
  };

  return (
    <>
      <section className="contentDetail " onClick={(e) => e.stopPropagation()}>
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
            <DetailItem item={item} />

            {/* CommentItem 댓글 */}
            <div className="contentDetail__list  ">
              {comments.map((item) => {
                return (
                  <CommentItem
                    comment={item}
                    key={item.id}
                    toggleModal={toggleModal}
                    feedId={feedId}
                    ismodal={true}
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

      {modalType === "feedOption" && modal && (
        <FeedOption feedId={item.id} closeModal={toggleModal} />
      )}
    </>
  );
};

export default ContentDetail;
