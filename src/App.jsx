import Card from "./components/card";
import Form from "./components/form";
import Complete from "./components/complete";
import { useState } from "react";

function App() {
  const [valid, setValid] = useState(false);
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  return (
    <>
      <Card
        cardHolder={cardHolder}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
      {valid ? (
        <Complete />
      ) : (
        <Form
          year={year}
          month={month}
          cardHolder={cardHolder}
          cardNumber={cardNumber}
          cvc={cvc}
          setCardNumber={setCardNumber}
          setYear={setYear}
          setMonth={setMonth}
          setCardHolder={setCardHolder}
          setValid={setValid}
          setCvc={setCvc}
        />
      )}
    </>
  );
}

export default App;
