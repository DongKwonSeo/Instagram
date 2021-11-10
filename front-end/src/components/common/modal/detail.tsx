import React from "react";
import ContentDetail from "../../main/feed/contentDetail/contentDetail";
import Modal from "./modal";
interface Props {
  feedId: string;
  closeModal: (type: string) => void;
}

const Detail = ({ feedId, closeModal }: Props) => {
  return (
    <Modal closeModal={() => closeModal("")}>
      <ContentDetail closeModal={closeModal} feedId={feedId} />
    </Modal>
  );
};

export default Detail;
