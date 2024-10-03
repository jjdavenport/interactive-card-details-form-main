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
  const [sumbitted, setSubmitted] = useState(false);

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
    <>
      <form noValidate onSubmit={submit} className="flex flex-col gap-2 p-4">
        <label className="flex flex-col gap-2">
          Cardholder Name
          <Input
            placeholder={"e.g. Jane Appleseed"}
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            onError={(e) => setCardHolderError(e)}
            onSubmit={sumbitted}
          />
        </label>
        <label className="flex flex-col gap-2">
          Card Number
          <Input
            type={"number"}
            placeholder={"e.g. 1234 5678 9123 0000"}
            options={{ creditCard: true, visa: true }}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            onError={(e) => setCardNumberError(e)}
            onSubmit={sumbitted}
          />
        </label>
        <label className="flex flex-col">
          Exp date
          <div className="flex">
            <div className="flex flex-col">
              <Input
                options={{ date: true, datePattern: ["m"] }}
                placeholder={"MM"}
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                onError={(e) => setMonthError(e)}
                onSubmit={sumbitted}
              />
            </div>
            <div className="flex flex-col">
              <Input
                options={{ date: true, datePattern: ["y"] }}
                placeholder={"YY"}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                onError={(e) => setYearError(e)}
                onSubmit={sumbitted}
              />
            </div>
          </div>
        </label>
        <label className="flex flex-col gap-2">
          CVC
          <Input
            options={{
              numeralPositiveOnly: true,
              blocks: [3],
              numericOnly: true,
            }}
            value={cvc}
            placeholder={"e.g. 123"}
            onChange={(e) => setCvc(e.target.value)}
            onError={(e) => setCvcError(e)}
            onSubmit={sumbitted}
          />
        </label>
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};

export default Form;
