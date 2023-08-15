import AboutUs from "../cards/AboutUs";
const About = () => {
  return (
    <div className="w-full flex flex-col text-violet-900 p-10 md:p-20">
      <h1 className="font-bold text-4xl">About Us</h1>
      <AboutUs />
      <AboutUs reverse="true" />
    </div>
  );
};

export default About;
