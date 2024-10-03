import { useEffect, useState } from "react";
import Cleave from "cleave.js/react";

const Input = ({
  options,
  placeholder,
  value,
  onChange,
  onError,
  onSubmit,
  type = "text",
}) => {
  const [error, setError] = useState("");

  const validate = (val) => {
    const option = options || {};
    if (val === "") {
      setError("Can't be blank");
      onError(error);
    } else if (option.date && val.length < 2) {
      setError("Full date");
      onError(error);
    } else if (option.creditCard && val.length < 19) {
      setError("short card");
      onError(error);
    } else if (option.numeralPositiveOnly && val.length < 3) {
      setError("Short CVC");
      onError(true);
    } else {
      setError("");
      onError(false);
    }
  };

  useEffect(() => {
    if (onSubmit) {
      validate(value);
    }
  }, [onSubmit, value]);

  const blur = () => {
    validate(value);
  };

  if (type === "text") {
    return (
      <>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={blur}
        />
        {error && <span>{error}</span>}
      </>
    );
  }

  return (
    <>
      <Cleave
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={blur}
        options={options || {}}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export default Input;
