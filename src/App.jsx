import data from "./components/assets/data.json";
import Card from "./components/card";
import Form from "./components/form";
import Complete from "./components/complete";

function App() {
  return (
    <>
      <Card data={data[0].card_info} />
      <Form data={data[1].form_placeholders} />
      <Complete data={data[2].complete} />
    </>
  );
}

export default App;
