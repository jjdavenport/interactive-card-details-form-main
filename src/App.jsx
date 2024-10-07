import CardMobile from "./components/card-mobile";
import Form from "./components/form";
import Complete from "./components/complete";
import Footer from "./components/footer";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import CardDesktop from "./components/card-desktop";

function App() {
  const desktop = useMediaQuery({ minWidth: 768 });
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

  if (desktop) {
    return (
      <>
        <div className="flex h-full min-h-screen flex-col font-custom text-lg font-medium text-veryDarkViolet">
          <main className="flex min-h-[55rem] w-full flex-1 flex-col md:flex-row">
            <CardDesktop
              cardHolder={cardHolder}
              cardNumber={cardNumber}
              month={month}
              year={year}
              cvc={cvc}
            />
            {valid ? (
              <>
                <section className="flex w-full flex-col items-center justify-center ~md/2xl:~pl-24/0">
                  <Complete onClick={reset} />
                  <Footer />
                </section>
              </>
            ) : (
              <>
                <section className="flex w-full flex-col items-center justify-center ~md/2xl:~pl-24/0">
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
                  <Footer />
                </section>
              </>
            )}
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex h-full min-h-screen flex-col font-custom text-lg font-medium text-veryDarkViolet">
        <main className="flex flex-1 flex-col md:flex-row">
          <CardMobile
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
