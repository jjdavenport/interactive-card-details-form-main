import { useState } from "react";
import Input from "./input";

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
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    return (
      cardHolderError === false &&
      cardNumberError === false &&
      monthError === false &&
      yearError === false &&
      cvcError === false
    );
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateForm()) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <form noValidate onSubmit={submit} className="flex flex-col gap-4 p-4">
      <label className="flex flex-col gap-2">
        Cardholder Name
        <Input
          type={"text"}
          placeholder={"e.g. Jane Appleseed"}
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          onError={(e) => setCardHolderError(e)}
        />
      </label>
      <label className="flex flex-col gap-2">
        Card Number
        <Input
          options={{ creditCard: true, visa: true }}
          type={"number"}
          placeholder={"e.g. 1234 5678 9123 0000"}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          onError={(e) => setCardNumberError(e)}
        />
      </label>
      <div className="flex gap-4 w-full">
        <label className="flex flex-col  uppercase w-1/2">
          Exp. date (MM/YY)
          <div className="flex gap-2">
            <div className="flex flex-col w-1/2">
              <Input
                options={{ date: true, datePattern: ["m"] }}
                type={"number"}
                placeholder={"MM"}
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                onError={(e) => setMonthError(e)}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <Input
                options={{ date: true, datePattern: ["y"] }}
                type={"number"}
                placeholder={"YY"}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                onError={(e) => setYearError(e)}
              />
            </div>
          </div>
        </label>
        <label className="flex flex-col w-1/2">
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
          />
        </label>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Form;
