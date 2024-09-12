import cardIcon from "./assets/card-logo.svg";

const Card = ({ data }) => {
  return (
    <>
      <section>
        {data.map((i, index) => (
          <span key={index}>{i}</span>
        ))}
      </section>
    </>
  );
};

export default Card;
