import Card from "./components/card";
import Form from "./components/form";
import Complete from "./components/complete";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [valid, setValid] = useState(false);
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const reset = () => {
    setCardHolder("");
    setCardNumber("");
    setMonth("");
    setYear("");
    setCvc("");
    setValid(false);
  };

  return (
    <>
      <div className="flex h-full min-h-screen flex-col font-custom text-lg font-medium text-veryDarkViolet">
        <main className="flex flex-1 flex-col">
          <Card
            cardHolder={cardHolder}
            cardNumber={cardNumber}
            month={month}
            year={year}
            cvc={cvc}
          />
          {valid ? (
            <Complete onClick={reset} />
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
