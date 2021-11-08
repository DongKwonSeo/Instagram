import React from "react";
import ContentDetail from "../../main/feed/contentDetail/contentDetail";
import Modal from "./modal";
interface Props {
  feedId: string;
  closeModal: () => void;
}

const Detail = ({ feedId, closeModal }: Props) => {
  return (
    <Modal feedId={feedId} closeModal={closeModal}>
      <ContentDetail />
    </Modal>
  );
};

export default Detail;
