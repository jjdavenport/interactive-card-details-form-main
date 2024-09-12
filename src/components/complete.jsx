const Complete = ({ data }) => {
  return (
    <>
      <article>
        <img src={data.img} />
        <span>{data.title}</span>
        <span>{data.message}</span>
        <button>{data.button_text}</button>
      </article>
    </>
  );
};

export default Complete;
