import scoutImage from "../../../public/scoutss.jpeg";
import Activity from "../cards/Activity";
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
      image: scoutImage,
      title: "Activites",
      description:
        "Our activity finder is bursting with programme ideas, and can be searched by section, time, cost, setting, type or learning outcomes.",
      link: "#",
    },
    {
      id: 2,
      image: scoutImage,
      title: "Activites",
      description:
        "Our activity finder is bursting with programme ideas, and can be searched by section, time, cost, setting, type or learning outcomes.",
      link: "#",
    },
    {
      id: 3,
      image: scoutImage,
      title: "Activites",
      description:
        "Our activity finder is bursting with programme ideas, and can be searched by section, time, cost, setting, type or learning outcomes.",
      link: "#",
    },
    {
      id: 4,
      image: scoutImage,
      title: "Activites",
      description:
        "Our activity finder is bursting with programme ideas, and can be searched by section, time, cost, setting, type or learning outcomes.",
      link: "#",
    },
    {
      id: 5,
      image: scoutImage,
      title: "Activites",
      description:
        "Our activity finder is bursting with programme ideas, and can be searched by section, time, cost, setting, type or learning outcomes.",
      link: "#",
    },
  ];
  return (
    <div>
      <h1>Running Scouts</h1>
      {/* will be continued............ */}
      {/* <div className="grid grid-cols-3 space-x-5 text-black">
        {activities.map((activity) => (
          <Activity key={activity.id} {...activity} />
        ))}
      </div> */}
    </div>
  );
};

export default RunScouts;
