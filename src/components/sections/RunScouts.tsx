import scoutImage from "../../../public/scoutss.jpeg";
import sculf from "../../../public/sculf.jpg";
import Activity from "../cards/Activity";
import badge from "../../../public/badgess.png";
import camping from "../../../public/camping.jpg";
import training from "../../../public/trainings.jpg";
import volunteer from "../../../public/volunteer.jpg";
import umuganda from "../../../public/umuganda.jpg";
const RunScouts = () => {
  const activities = [
    {
      id: 1,
      image: scoutImage,
      title: "Activites",
      description:
        "Our activity finder is bursting with programme ideas, and can be searched by section, time, cost, setting, type or learning outcomes.",
      link: "#",
    },
    {
      id: 2,
      image: badge,
      title: "Badges",
      description:
        "Master something you love, or try something shiny and new. These badges allow a young person to gain whichever badge is appropriate to the level they have reached.",
      link: "#",
    },
    {
      id: 2,
      image: camping,
      title: "Night Away",
      description:
        "Whether camping, hostelling, or sleepovers, nights away form an integral part of Scouts, which every young person should have an opportunity to take part in.",
      link: "#",
    },
    {
      id: 3,
      image: training,
      title: "Trainings",
      description:
        "Learn more about the training for your role and how you can prepare young people with skills for life.",
      link: "#",
    },
    {
      id: 4,
      image: volunteer,
      title: "Volunteering",
      description:
        "Find out how we're transforming volunteering at Scouts to make it easier, more enjoyable and rewarding.",
      link: "#",
    },
    {
      id: 5,
      image: umuganda,
      title: "Umuganda",
      description:
        "In the process of advancing our country, we engage in community work and other initiatives to promote and assist those in need.",
      link: "#",
    },
  ];
  return (
    <div className="bg-[#f2eafa]  text-[#0c0d2c] pt-16">
      <div className="flex flex-col mx-32">
        <h1 className="text-4xl font-extrabold text-center">Running Scouts</h1>
        <div className="grid grid-cols-3 space-x-5 text-black">
          {activities.map((activity) => (
            <Activity key={activity.id} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunScouts;
