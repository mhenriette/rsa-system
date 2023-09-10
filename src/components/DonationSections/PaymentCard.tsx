"use client";
import { useState } from "react";
import { Amount } from "../cards/Amount";

const PaymentCard = ({ className }: any) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);

  const changeStep = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };
  const Step2 = () => {
    return (
      <div>
        <div className="bg-theme text-white py-3 px-10 text-center">{`Donating ${amount}`}</div>
        <form>
          <input placeholder="first name" />
          <input placeholder="last name" />
          <input placeholder="email" />
          <input placeholder="Your message" />
        </form>
      </div>
    );
  };
  const step3 = () => {
    return <div>Payyy </div>;
  };
  return (
    <div className={`bg-white py-8 px-5 text-theme w-[450px] ${className}`}>
      {step === 1 && (
        <>
          <h1 className="text-center text-theme font-bold text-2xl">
            Donate Today
          </h1>
          <div>
            <div className="grid grid-cols-2 items-start">
              {[10, 20, 20, 40].map((amount) => (
                <Amount key={amount} amount={amount} />
              ))}
            </div>
            <input
              placeholder="Enter Custom Amount"
              className="border border-theme rounded-lg m-4 p-2"
            />
          </div>
        </>
      )}
      {step === 2 && <Step2 />}
      {step === 3 && <h1>Hello 3</h1>}
      <button
        className="bg-theme rounded-md py-3 px-10 w-full m-4 text-white"
        onClick={changeStep}
      >
        Next
      </button>
    </div>
  );
};

export default PaymentCard;
