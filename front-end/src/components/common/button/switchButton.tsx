import React from "react";

interface Props {
  id: string;
}
const SwitchButton = ({ id }: Props) => {
  return (
    <div className="switchButton">
      <input
        id={id}
        className="switchButton__checkbox"
        type="checkbox"
        placeholder="asdasd"
      />
      <label htmlFor={id} className="switchButton__label" />
    </div>
  );
};

export default SwitchButton;
