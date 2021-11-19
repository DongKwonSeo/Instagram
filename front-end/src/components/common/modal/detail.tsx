import React from "react";
import ContentDetail from "../../main/feed/contentDetail/contentDetail";
import Modal from "./modal";
interface Props {
  feedId: string;
  toggleModal: (type: string) => void;
}

const Detail = ({ feedId, toggleModal }: Props) => {

  return (
    <Modal closeModal={() => toggleModal("")}>
      <ContentDetail toggleModal={toggleModal} feedId={feedId} />
    </Modal>
    
  );
};

export default Detail;
