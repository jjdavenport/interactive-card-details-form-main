import icon from "./assets/icon-complete.svg";

const Complete = ({ onClick }) => {
  return (
    <>
      <article className="flex flex-col items-center gap-10 p-4 py-20 text-center md:w-6/12 md:max-w-lg md:flex-1 md:justify-center">
        <img className="w-1/6" src={icon} />
        <div className="flex flex-col gap-4">
          <span className="text-3xl uppercase tracking-wide">Thank you!</span>
          <span className="text-darkGrayishViolet">
            We've added your card details
          </span>
        </div>
        <button
          className="w-full rounded-lg bg-veryDarkViolet p-4 text-white"
          onClick={onClick}
        >
          Continue
        </button>
      </article>
    </>
  );
};

export default Complete;
