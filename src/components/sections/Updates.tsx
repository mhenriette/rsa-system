import React from "react";
import UpdateCard from "../cards/UpdateCard";
import school from "../../../public/school.png";
import sculf from "../../../public/sculf.jpg";
const updates = [
  {
    id: 1,
    image: school,
    description:
      "Last week we conducted a training with student in huye district teaching them the importance of loving the country and work",
    date: "09-07-2022",
  },
  {
    id: 2,
    image: sculf,
    description:
      "We conducted scout event and gave scout scult to new members ",
    date: "01-09-2022",
  },
];

const Updates = () => {
  return (
    <div className="bg-[#f2eafa]  text-[#0c0d2c] pt-16">
      <div className="flex flex-col mx-32">
        <h1 className="text-4xl font-extrabold text-center">
          What is Happening
        </h1>
        <div className="grid grid-cols-2 place-content-center items-start place-items-center space-x-5 text-black">
          {updates.map((update: any) => (
            <UpdateCard
              key={update.id}
              description={update.description}
              image={update.image}
              date={update.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
