import React from "react";

const SwitchButton = () => {
  return (
    <div className="switchButton">
      <input
        id="checkbox"
        className="switchButton__checkbox"
        type="checkbox"
        placeholder="asdasd"
      />
      <label htmlFor="checkbox" className="switchButton__label" />
    </div>
  );
};

export default SwitchButton;
