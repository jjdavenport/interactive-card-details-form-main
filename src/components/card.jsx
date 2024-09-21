import cardIcon from "./assets/card-logo.svg";

const Card = ({ data }) => {
  return (
    <>
      <section className="flex flex-col gap-2 p-4">
        {data.map((i, index) => (
          <span key={index}>{i}</span>
        ))}
      </section>
    </>
  );
};

export default Card;
