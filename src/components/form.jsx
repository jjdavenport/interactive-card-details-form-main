import Input from "./input";

const Form = ({ data }) => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form noValidate onSubmit={submit} className="flex flex-col gap-2">
        {data.map((i, index) => (
          <label key={index}>
            {i.label}
            <Input placeholder={i.placeholder} />
          </label>
        ))}
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};

export default Form;
