import React, { useState } from "react";
import Content from "../feedcontent/content";
import { FEEDITEM } from "../../../../interfaces/interface";
import User from "./user";
import Detail from "../../../common/modal/detail";
import FeedOption from "../../../common/modal/feedOption";

interface Props {
  item: FEEDITEM;
}
const FeedItem = ({ item }: Props) => {
  const [modal, setmodal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");

  const toggleModal = (type: string | null) => {
  setmodal(!!type);
    type && setModalType(type);
  };

  return (
    <div className="feedItem">
      <User item={item} toggleModal={() => toggleModal("feedOption")} />
      {/* {data.length > 1 ? (
      <FeedCarousel />
      ) : ( */}
      <div className="img">
        <img
          className="feedImg"
          src={item.image || "../imgs/feedimg.jpeg"}
          alt="피드 이미지"
        />
      </div>
      {/* )} */}
      <Content item={item} toggleModal={toggleModal} />

      {/* {modalType === "detail" && modal && (
        <Detail feedId={item.id} closeModal={toggleModal} />
      )} */}
      {modalType === "detail" && modal && (
        <Detail feedId={item.id} toggleModal={toggleModal} />
      )}

      {modalType === "feedOption" && modal && (
        <FeedOption feedId={item.id} closeModal={toggleModal} />
      )}
    </div>
  );
};

export default FeedItem;
