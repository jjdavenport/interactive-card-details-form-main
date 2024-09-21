const Complete = ({ data }) => {
  return (
    <>
      <article className="flex flex-col p-4">
        <img className="w-4" src={data.img} />
        <span>{data.title}</span>
        <span>{data.message}</span>
        <button>{data.button_text}</button>
      </article>
    </>
  );
};

export default Complete;
