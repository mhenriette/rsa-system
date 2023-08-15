import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="bg-hero-pattern w-full bg-fill bg-cover relative bg-center">
      <div className="bg-black bg-opacity-30 w-full">
        <div className="py-20 px-5 md:py-40 md:pl-32">
          <div className="p-8 md:p-16 flex flex-col md:w-1/5 bg-black bg-opacity-60">
            <h1 className="font-bold text-lg md:text-4xl mb-2 md:mb-5">
              Preparing young people with skills for life
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              saepe velit delectus laborum id excepturi iure eum amet quos
              molestiae veniam alias.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center mt-5">
              <Button full="true">Volunteer</Button>
              <Button full="true">Join Scouts</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
