import icon from "./assets/icon-complete.svg";

const Complete = ({ onClick }) => {
  return (
    <>
      <article className="flex flex-col p-4">
        <img className="w-4" src={icon} />
        <span>Thank you!</span>
        <span>We've added your card details</span>
        <button onClick={onClick}>Continue</button>
      </article>
    </>
  );
};

export default Complete;
