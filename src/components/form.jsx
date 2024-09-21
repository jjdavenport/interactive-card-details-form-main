import Input from "./input";

const Form = ({ data }) => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form noValidate onSubmit={submit} className="flex flex-col gap-2 p-4">
        {data.map((i, index) => (
          <label key={index} className="flex flex-col gap-2">
            {i.label}
            {i.placeholders ? (
              <div className="flex gap-2">
                {i.placeholders.map((i, index) => (
                  <Input
                    key={index}
                    placeholder={i}
                    type={i.type}
                    className="flex-1"
                  />
                ))}
              </div>
            ) : (
              <Input type={i.type} placeholder={i.placeholder} />
            )}
          </label>
        ))}
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};

export default Form;
