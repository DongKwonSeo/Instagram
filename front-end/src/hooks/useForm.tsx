import React from "react";
import { useState } from "react";

interface userFormType {
  <T>(initForm: T): {
    handleChange: (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    form: T;
    setForm: (initForm: T) => void;
  };
}

const Useform: userFormType = (initForm) => {
  const [form, setForm] = useState(initForm);

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
