import { useEffect, useState } from "react";
import Cleave from "cleave.js/react";

const InputMonthYear = ({ value, onChange, onError, onBlur }) => {
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const validate = (val, type) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (type === "MM") {
      if (val === "") {
        setMonthError("Can't be blank");
        onError({ monthError: true, yearError: yearError !== "" });
      } else if (
        parseInt(value.year) === currentYear &&
        parseInt(val) < currentMonth
      ) {
        setMonthError("Can't be in the past");
        onError({ monthError: true, yearError: yearError !== "" });
      } else {
        setMonthError("");
        onError({ monthError: false, yearError: yearError !== "" });
      }
    } else if (type === "YY") {
      if (val === "") {
        setYearError("Can't be blank");
        onError({ monthError: monthError !== "", yearError: true });
      } else if (parseInt(val) < currentYear) {
        setYearError("Can't be in the past");
        onError({ monthError: monthError !== "", yearError: true });
      } else {
        setYearError("");
        onError({ monthError: monthError !== "", yearError: false });
      }
    }
  };

  const blur = (type) => {
    const valueToValidate = type === "MM" ? value.month : value.year;
    validate(valueToValidate, type);
  };

  useEffect(() => {
    if (onBlur && typeof onBlur === "function") {
      onBlur({
        MM: () => blur("MM"),
        YY: () => blur("YY"),
      });
    }
  }, [onBlur, value.month, value.year]);

  return (
    <>
      <div className="flex gap-4">
        <Cleave
          className={`${
            monthError
              ? "outline-red-600"
              : "outline-lightGrayishViolet hover:outline-veryDarkViolet focus:outline-veryDarkViolet"
          } flex w-full transform cursor-pointer rounded-md p-2 text-lg tracking-widest outline outline-1 duration-300 ease-in-out placeholder:pl-2 placeholder:text-lightGrayishViolet`}
          placeholder="MM"
          value={value.month}
          onChange={(e) => {
            onChange({ month: e.target.value, year: value.year });
          }}
          onBlur={() => blur("MM")}
          options={{ date: true, datePattern: ["m"] }}
        />
        <Cleave
          className={`${
            yearError
              ? "outline-red-600"
              : "outline-lightGrayishViolet hover:outline-veryDarkViolet focus:outline-veryDarkViolet"
          } flex w-full transform cursor-pointer rounded-md p-2 text-lg tracking-widest outline outline-1 duration-300 ease-in-out placeholder:pl-2 placeholder:text-lightGrayishViolet`}
          placeholder="YY"
          value={value.year}
          onChange={(e) => {
            onChange({ month: value.month, year: e.target.value });
          }}
          onBlur={() => blur("YY")}
          options={{ date: true, datePattern: ["y"] }}
        />
      </div>
      <div className="h-1">
        {monthError && (
          <span className="transform text-sm normal-case text-red-600 duration-300 ease-in-out">
            {monthError}
          </span>
        )}
        {!monthError && yearError && (
          <span className="transform text-sm normal-case text-red-600 duration-300 ease-in-out">
            {yearError}
          </span>
        )}
      </div>
    </>
  );
};

export default InputMonthYear;
