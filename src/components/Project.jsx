import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";

const ProjectCards = (props) => {
  return (
    <Tilt className="rounded-2xl bg-warm-green p-5 sm:w-[360px] w-full sm:h-[600px]">
      <div className="flex flex-col">
        <div className="relative w-full h-[230px]">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="mt-5 w-full">
          <h3 className="text-dark-green font-bold text-[24px]">
            {props.name}
          </h3>
          <p className="mt-2 text-warm-dark-green text-[12px]">
            {props.description.split("<br>").map((item, index, array) => (
              <>
                {item}
                {index !== array.length - 1 && <br />}
              </>
            ))}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {props.tags.map((tag) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </div>
    </Tilt>
  );
};

const Project = () => {
  return (
    <section className="relative w-full h-full flex md:px-20 sm-px-20 px-6 sm:py-20 py-20">
      <div className="flex flex-col w-full h-full pt-6">
        <div className="w-full h-full">
          <h1 className="sm:mt-auto text-center font-black text-warm-dark-green mb-6 md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects
          </h1>
        </div>
        <div className="flex w-full h-fit sm:flex-row flex-wrap flex-col gap-5 items-center justify-center">
          {projects.map((project, index) => {
            return (
              <ProjectCards
                key={`project-${index}`}
                index={index}
                {...project}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Project, "project");
