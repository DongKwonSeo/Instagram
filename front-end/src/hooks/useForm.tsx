import React from "react";
import { useState } from "react";

const Useform = () => {
  const [form, setForm] = useState({
    text: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return { handleChange, form, setForm };
};

export default Useform;
