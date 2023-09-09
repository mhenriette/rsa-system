import React from "react";
import { Amount } from "../cards/Amount";

const PaymentCard = ({ className }: any) => {
  return (
    <div className={`bg-white py-8 px-5 text-theme w-[450px] ${className}`}>
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
      <button className="bg-theme rounded-md py-3 px-10 w-full m-4 text-white">
        Next
      </button>
    </div>
  );
};

export default PaymentCard;
