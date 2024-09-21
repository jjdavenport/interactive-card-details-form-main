import { useState } from "react";

const Input = ({ placeholder, type }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const validate = (val) => {
    const regex = /^\d+$/;
    if (val === "") {
      setError("Can't be blank");
    } else if (type === "number" && !val.match(regex)) {
      setError("Wrong format,numbers only");
    } else {
      setError("");
    }
  };

  const blur = () => {
    validate(input);
  };

  const change = (e) => {
    const val = e.target.value;
    setInput(val);
    validate(val);
  };

  return (
    <>
      <input
        type={type === "number" ? "text" : type}
        placeholder={placeholder}
        value={input}
        onChange={change}
        onBlur={blur}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export default Input;
