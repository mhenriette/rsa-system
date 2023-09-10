"use client";
import { useState, useEffect } from "react";
import { Amount } from "../cards/Amount";

const PaymentCard = ({ className, donation_id }: any) => {
  // const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);
  const [contact, setContact] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const changeStep = () => {
  //   if (step < 3) {
  //     setStep((prev) => prev + 1);
  //   }
  // };
  const handleAmount = (e: any) => {
    e.preventDefault();
    setAmount(Number(e.target.value));
  };
  const handleContact = (e: any) => {
    e.preventDefault();
    setContact(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({
        contact,
        amount,
        type: "donation",
        donation_id,
        ...data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Payment successful");
        } else {
          console.error("Payment failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleData = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // const Step2 = () => {
  //   return (
  //     <div>
  //       <div className="bg-theme text-white py-3 px-10 text-center">{`Donating ${amount}`}</div>

  //       <input placeholder="first name" />
  //       <input placeholder="last name" />
  //       <input
  //         placeholder="Enter your Number"
  //         name="number"
  //         value={number}
  //         onChange={(e) => handleNumber(e)}
  //       />
  //       <input placeholder="email" />
  //       <input placeholder="Your message" />
  //     </div>
  //   );
  // };
  // const Step3 = () => {
  //   return (

  //   );
  // };
  console.log(data, "dataaaa");

  return (
    <form
      className={`bg-white py-8 px-5 text-theme w-[450px] ${className}`}
      onSubmit={handleSubmit}
    >
      {/* {step === 1 && ( */}

      <h1 className="text-center text-theme font-bold text-2xl">
        Donate Today
      </h1>
      <div className="">
        <div className="grid grid-cols-2 items-start space-x-2- gap-x-2">
          {[10, 20, 30, 40].map((el) => (
            <Amount
              className={`${amount === el && "bg-green-700 text-white"}`}
              amount={el}
              key={el}
              onClick={(e: any) => {
                e.preventDefault();
                setAmount(el);
              }}
            />
          ))}
        </div>
        <input
          placeholder="Enter Custom Amount"
          className="border border-theme rounded-lg p-2 w-full"
          onChange={handleAmount}
        />
      </div>
      {/* </> */}
      {/* )} */}

      {/* {step === 2 && <Step2 />}*/}
      <div>
        {/* <div className="bg-light text-theme border-theme border py-3 px-10 text-center rounded-full">{`Donating ${amount}`}</div> */}

        <input
          placeholder="Enter your name"
          className="py-2 border-theme border w-full my-3 rounded-md px-2 outline-none"
          onChange={handleData}
          value={data.name}
          name="name"
        />

        <input
          placeholder="Enter your Number"
          name="contact"
          value={contact}
          onChange={handleContact}
          className="py-2 border-theme border w-full my-3 rounded-md px-2 outline-none"
        />
        <input
          placeholder="email"
          className="py-2 border-theme border w-full my-3 rounded-md px-2 outline-none"
          onChange={handleData}
          value={data.email}
          name="email"
        />
        <input
          placeholder="Your message"
          className="py-2 border-theme border w-full my-3 rounded-md px-2 outline-none"
          onChange={handleData}
          value={data.message}
          name="message"
        />
        <input type="hidden" value="donation" name="type" />
        {donation_id && (
          <input type="hidden" value={donation_id} name="donation_id" />
        )}
      </div>

      {/* {step === 3 && <Step3 />}  */}
      <div>
        <button
          type="submit"
          className="py-2 bg-green-700 text-white border w-full my-3 rounded-md px-2 outline-none"
        >
          Make payment
        </button>
      </div>
      {/* <button
        className="bg-theme rounded-md py-3 px-10 w-full m-4 text-white"
        onClick={changeStep}

      >
        Next
      </button> */}
    </form>
  );
};

export default PaymentCard;
