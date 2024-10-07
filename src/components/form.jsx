import { useState, useRef } from "react";
import Input from "./input";
import InputMonthYear from "./input-month-year";

const Form = ({
  month,
  year,
  cardNumber,
  cardHolder,
  cvc,
  setMonth,
  setYear,
  setCardNumber,
  setCardHolder,
  setCvc,
  setValid,
}) => {
  const [cardHolderError, setCardHolderError] = useState(true);
  const [cardNumberError, setCardNumberError] = useState(true);
  const [monthError, setMonthError] = useState(true);
  const [yearError, setYearError] = useState(true);
  const [cvcError, setCvcError] = useState(true);

  const validateForm = () => {
    return (
      cardHolderError === false &&
      cardNumberError === false &&
      monthError === false &&
      yearError === false &&
      cvcError === false
    );
  };

  const cardHolderRef = useRef();
  const cardNumberRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const cvcRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    cardHolderRef.current?.();
    cardNumberRef.current?.();
    monthRef.current?.();
    yearRef.current?.();
    cvcRef.current?.();
    if (validateForm()) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={submit}
      className="flex flex-1 flex-col gap-8 p-4 py-20 md:w-6/12 md:min-w-72 md:max-w-md md:justify-center md:p-0"
    >
      <label className="flex flex-col gap-2 text-sm uppercase">
        Cardholder Name
        <Input
          type={"text"}
          placeholder={"e.g. Jane Appleseed"}
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          onError={(e) => setCardHolderError(e)}
          onBlur={(blur) => (cardHolderRef.current = blur)}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm uppercase">
        Card Number
        <Input
          options={{ blocks: [4, 4, 4, 4], delimiter: " ", numericOnly: true }}
          type={"number"}
          placeholder={"e.g. 1234 5678 9123 0000"}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          onError={(e) => setCardNumberError(e)}
          onBlur={(blur) => (cardNumberRef.current = blur)}
        />
      </label>
      <div className="flex w-full items-center gap-2">
        <label className="flex w-1/2 flex-col gap-1 text-sm uppercase">
          Exp. date (MM/YY)
          <InputMonthYear
            value={{ month, year }}
            onChange={({ month, year }) => {
              setMonth(month);
              setYear(year);
            }}
            onError={({ monthError, yearError }) => {
              setMonthError(monthError);
              setYearError(yearError);
            }}
            onBlur={(blurFunctions) => {
              monthRef.current = blurFunctions.MM;
              yearRef.current = blurFunctions.YY;
            }}
          />
        </label>
        <label className="flex w-1/2 flex-col gap-1 text-sm">
          CVC
          <Input
            options={{
              numeralPositiveOnly: true,
              blocks: [3],
              numericOnly: true,
            }}
            type={"number"}
            value={cvc}
            placeholder={"e.g. 123"}
            onChange={(e) => setCvc(e.target.value)}
            onError={(e) => setCvcError(e)}
            onBlur={(blur) => (cvcRef.current = blur)}
          />
        </label>
      </div>
      <button
        className="rounded-lg bg-veryDarkViolet p-3 text-white"
        type="submit"
      >
        Confirm
      </button>
    </form>
  );
};

export default Form;
