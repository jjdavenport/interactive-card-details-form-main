import cardIcon from "./assets/card-logo.svg";

const Card = ({ cardHolder, cardNumber, month, year, cvc }) => {
  const defaultCardHolder = () => {
    if (!cardHolder) return "JANE APPLESEED";
    return cardHolder;
  };

  const defaultCardNumber = () => {
    if (!cardNumber) return "0000 0000 0000 0000";
    const strippedNumber = cardNumber.replace(/\s/g, "");
    const paddedNumber = strippedNumber.padEnd(16, "0");
    return paddedNumber.replace(/(.{4})/g, "$1 ").trim();
  };

  const defaultCvc = () => {
    if (!cvc) return "000";
    return cvc.padEnd(3, "0").slice(0, 3);
  };

  const defaultMonth = () => {
    if (!month) return "00";
    return month.padStart(2, "0").slice(0, 2);
  };

  const defaultYear = () => {
    if (!year) return "00";
    return year.padStart(2, "0").slice(0, 2);
  };

  return (
    <>
      <section className="flex flex-col gap-2 p-4">
        <span>{defaultCvc()}</span>
        <span>{defaultCardNumber()}</span>
        <span className="uppercase">{defaultCardHolder()}</span>
        <span>
          {defaultMonth()}/{defaultYear()}
        </span>
      </section>
    </>
  );
};

export default Card;
