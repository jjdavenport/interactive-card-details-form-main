import icon from "./assets/icon-complete.svg";

const Complete = ({ onClick }) => {
  return (
    <>
      <article className="flex flex-col gap-10 items-center p-4 text-center">
        <img className="w-1/6" src={icon} />
        <div className="flex flex-col gap-4">
          <span className="uppercase text-3xl tracking-wide">Thank you!</span>
          <span className="text-darkGrayishViolet">
            We've added your card details
          </span>
        </div>
        <button
          className="text-white bg-veryDarkViolet w-full p-4 rounded-lg"
          onClick={onClick}
        >
          Continue
        </button>
      </article>
    </>
  );
};

export default Complete;
