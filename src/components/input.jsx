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
      setError("Must be 16 digits");
      onError(true);
    } else if (option.numeralPositiveOnly && val.length < 3) {
      setError("Must be 3 Digits");
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
        <div
          className={`${error ? "bg-errorRed" : "bg-lightGrayishViolet focus-within:bg-gradient-to-r hover:bg-gradient-to-r"} group rounded-md from-gradientStart to-gradientEnd p-[1px] transition-all duration-300 ease-in-out`}
        >
          <div className="rounded-md bg-white">
            <input
              className="flex w-full cursor-pointer rounded-md p-2 text-lg outline-none duration-300 ease-in-out placeholder:text-lightGrayishViolet md:pl-4"
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={blur}
            />
          </div>
        </div>
        <div className="h-1">
          {error && (
            <span className="transform text-sm normal-case text-errorRed duration-300 ease-in-out">
              {error}
            </span>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={`${error ? "bg-errorRed" : "bg-lightGrayishViolet focus-within:bg-gradient-to-r hover:bg-gradient-to-r"} group rounded-md from-gradientStart to-gradientEnd p-[1px] transition-all duration-300 ease-in-out`}
      >
        <div className="rounded-md bg-white">
          <Cleave
            className="flex w-full cursor-pointer rounded-md p-2 text-lg outline-none duration-300 ease-in-out placeholder:text-lightGrayishViolet md:pl-4"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={blur}
            options={options || {}}
          />
        </div>
      </div>
      <div className="h-1">
        {error && (
          <span className="transform text-sm normal-case text-errorRed duration-300 ease-in-out">
            {error}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
