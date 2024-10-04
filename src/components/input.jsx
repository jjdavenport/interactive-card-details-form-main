import Cleave from "cleave.js/react";
import { useState, useEffect } from "react";

const Input = ({
  options,
  placeholder,
  value,
  onChange,
  onError,
  type = "text",
  onBlur,
}) => {
  const [error, setError] = useState("");

  const validate = (val) => {
    const option = options || {};
    if (val === "") {
      setError("Can't be blank");
      onError(true);
    } else if (option.date && val.length < 2) {
      setError("Full date");
      onError(true);
    } else if (option.creditCard && val.length < 19) {
      setError("short card");
      onError(true);
    } else if (option.numeralPositiveOnly && val.length < 3) {
      setError("Short CVC");
      onError(true);
    } else {
      setError("");
      onError(false);
    }
  };

  const blur = () => {
    validate(value);
  };

  useEffect(() => {
    if (onBlur) {
      onBlur(blur);
    }
  }, [onBlur]);

  if (type === "text") {
    return (
      <>
        <input
          className={`${
            error ? "" : ""
          } outline p-1 flex w-full outline-1 rounded-md`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={blur}
        />
        {error && <span className="normal-case">{error}</span>}
      </>
    );
  }

  return (
    <>
      <Cleave
        className={`${
          error ? "" : ""
        } outline p-1 w-full flex outline-1 rounded-md`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={blur}
        options={options}
      />
      {error && <span className="normal-case">{error}</span>}
    </>
  );
};

export default Input;
