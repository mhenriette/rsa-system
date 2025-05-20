import React from "react";

const Category = ({ category, age }: any) => {
  return (
    <div className="py-8 px-14 bg-[#321548] text-white hover:text-[#321548] hover:bg-white transition-colors ease-out delay-200">
      <div className="flex flex-col items-center gap-y-2">
        <p className="font-bold text-2xl">{category}</p>
        <p className="truncate">{age} years</p>
      </div>
    </div>
  );
};

export default Category;
