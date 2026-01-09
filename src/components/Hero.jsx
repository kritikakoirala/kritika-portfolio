import { Button } from "./ui/button";
import profile from '../assets/profile.jpg'
// mt - 20 mb - 6 md: mb - 10
const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mt-20 mb-2 md:mb-10 px-2">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <p className="text-primary-color uppercase text-sm font-bold tracking-wide">Frontend Developer | Web developer | Full Stack Developer (Pursuing)</p>
        <h1 className="font-semibold text-pretty py-3 tracking-wider ">
          <span className="text-3xl block leading-12">Hey, this is</span>
          <span className="text-5xl block leading-12">Kritika Koirala</span>
        </h1>
        <p className="text-justify text-sm py-3 leading-7">
          Passionate frontend developer with 3.5+ years of experience in building functional, visually engaging apps. Skilled in ReactJS, NextJS, TypeScript, Node.js, and GraphQL, focused on intuitive UX and transforming complex data into seamless experiences.
        </p>
        <div className="flex gap-x-4 flex-wrap py-3">
          <Button className="bg-primary-color">
            <a href="#projects">
              Projects
            </a>
          </Button>
          <Button className="border border-2 ">
            <a href="https://www.linkedin.com/in/kritikakoirala/" target="_blank">
              Linkedin
            </a>
          </Button>
        </div>
      </div>

      <div className="w-60 mx-auto md:w-70 lg:w-1/2 order-1 md:order-2 pb-10 md:pb-0">
        <img src={profile} alt="Kritika Koirala" width={360} height={360} className=" rounded-full justify-self-center md:justify-self-end " />
      </div>
    </div>
  );
};

export default Hero;
