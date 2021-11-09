import React, { ReactNode, useState } from "react";
import Content from "../feedcontent/content";
import { FEEDITEM } from "../../../../interfaces/interface";
import User from "./user";
// import Detail from "../../../common/modal/detail";
// import FeedOption from "../../../common/modal/feedOption";

interface Props {
  item: FEEDITEM;
  children: ReactNode;
}
const 
FeedItem = ({ item }: Props) => {
  const [modal, setmodal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");

  const toggleModal = (type: string | null) => {
    setmodal((state) => !state);
    type && setModalType("type");
  };

  return (
    <div className="feedItem">
      <User item={item} toggleModal={() => toggleModal("detail")} />
      {/* {data.length > 1 ? (
      <FeedCarousel />
      ) : ( */}
      <div className="img">
        <img
          className="feedImg"
          src={item.image || "../imgs/feedimg.jpeg"}
          // src={item.image ? "../imgs/feedimg.jpeg" : undefined}
          alt="피드 이미지"
        />
      </div>
      {/* )} */}
      <Content item={item} toggleModal={toggleModal} />
    </div>
  );
};

export default FeedItem;

{
  /* modal  */
}

{
  /* {modalType === "detail" && modal && (
      <Detail feedId={item.id} closeModal={toggleModal} />
    )}
    {modalType === "feedOption" && modal && (
      <FeedOption feedId={item.id} closeModal={toggleModal} />
    )} */
}
