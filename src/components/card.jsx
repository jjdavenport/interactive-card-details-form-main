import logo from "./assets/card-logo.svg";
import cardFront from "./assets/bg-card-front.png";
import cardBack from "./assets/bg-card-back.png";

const Card = ({ cardHolder, cardNumber, month, year, cvc, desktop }) => {
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

  if (desktop) {
    return (
      <>
        <section className="relative flex flex-col gap-2 bg-cardMobile bg-cover bg-no-repeat text-white md:w-6/12 md:bg-cardDesktop">
          <div className="relative flex flex-1 flex-col">
            <div className="absolute top-2/4 w-96 ~lg/2xl:~left-1/[20rem]">
              <img className="top-cardBack absolute right-0" src={cardBack} />
              <span className="absolute right-12 top-[5.75rem] z-10 text-sm tracking-widest">
                {defaultCvc()}
              </span>
            </div>
            <div className="absolute top-1/4 ~lg/2xl:~left-1/[14rem] md:w-96">
              <img className="absolute left-6 top-6 z-20 w-20" src={logo} />
              <img className="absolute z-10" src={cardFront} />
              <span className="absolute left-6 top-28 z-20 text-2xl tracking-widest">
                {defaultCardNumber()}
              </span>
              <span className="absolute left-6 top-40 z-20 text-sm uppercase tracking-widest">
                {defaultCardHolder()}
              </span>
              <span className="absolute left-[19rem] top-40 z-20 text-sm tracking-widest text-white">
                {defaultMonth()}/{defaultYear()}
              </span>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="relative flex flex-col gap-2 bg-cardMobile bg-cover bg-no-repeat p-4 text-white md:bg-cardDesktop">
        <div className="relative flex h-56 flex-col gap-8">
          <div className="relative top-4">
            <img
              className="top-cardBack absolute right-0 w-72"
              src={cardBack}
            />
            <span className="absolute right-10 top-[4.4rem] z-20 text-xs tracking-widest">
              {defaultCvc()}
            </span>
          </div>
          <div className="relative top-20">
            <img className="absolute left-6 top-4 z-20 w-14" src={logo} />
            <img className="absolute z-10 w-72" src={cardFront} />
            <span className="absolute left-6 top-20 z-20 tracking-widest">
              {defaultCardNumber()}
            </span>
            <span className="absolute left-6 top-[7.5rem] z-20 text-xs uppercase tracking-widest">
              {defaultCardHolder()}
            </span>
            <span className="absolute left-56 top-[7.5rem] z-20 text-xs tracking-widest text-white">
              {defaultMonth()}/{defaultYear()}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
