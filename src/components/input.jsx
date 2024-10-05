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
            error
              ? "outline-red-600"
              : "outline-darkGrayishViolet hover:outline-veryDarkViolet focus:outline-veryDarkViolet"
          } outline p-2 flex w-full outline-1 cursor-pointer  rounded-md transform ease-in-out duration-300 placeholder:text-lightGrayishViolet`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={blur}
        />
        <div className="h-1">
          {error && (
            <span className="normal-case transform text-sm ease-in-out duration-300 text-red-600">
              {error}
            </span>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <Cleave
        className={`${
          error
            ? "outline-red-600"
            : "outline-darkGrayishViolet hover:outline-veryDarkViolet focus:outline-veryDarkViolet"
        } outline p-2 flex w-full outline-1 cursor-pointer  rounded-md transform ease-in-out duration-300 placeholder:text-lightGrayishViolet`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={blur}
        options={options || {}}
      />
      <div className="h-1">
        {error && (
          <span className="normal-case transform ease-in-out duration-300 text-sm text-red-600">
            {error}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
