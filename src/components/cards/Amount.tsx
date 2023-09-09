import React from "react";

export const Amount = ({ amount }: any) => {
  return (
    <div className="flex m-2 justify-center items-center py-3 px-10 font-bold text-xl border-theme border rounded-lg">
      <p>{amount}$</p>
    </div>
  );
};
