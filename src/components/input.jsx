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
    } else if (option.delimiter && val.length < 19) {
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
          } flex w-full transform cursor-pointer rounded-md p-2 text-lg outline outline-1 duration-300 ease-in-out placeholder:text-lightGrayishViolet`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={blur}
        />
        <div className="h-1">
          {error && (
            <span className="transform text-sm normal-case text-red-600 duration-300 ease-in-out">
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
        } flex w-full transform cursor-pointer rounded-md p-2 text-lg tracking-widest outline outline-1 duration-300 ease-in-out placeholder:text-lightGrayishViolet`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={blur}
        options={options || {}}
      />
      <div className="h-1">
        {error && (
          <span className="transform text-sm normal-case text-red-600 duration-300 ease-in-out">
            {error}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
