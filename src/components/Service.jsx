import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCards = (props) => {
  return (
    <div className="group">
      <div className="rounded-2xl w-full p-5 sm:w-[360px] sm:h-[300px] aspect-square bg-cadat-gray transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] relative">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="relative aspect-square flex items-center justify-center flex-col">
            <img
              src={props.icon}
              alt={props.title}
              className="w-1/2 rounded-2xl object-cover p-2"
            />
            <h1 className="text-center text-ellipsis sm:text-4/5 text-fit text-black p-2">
              {props.title}
            </h1>
            <p className="text-center text-ellipsis sm:text-2/3 text-[14px] text-black mb-4">
              {props.subtitle}
            </p>
          </div>
        </div>
        <div className=" flex absolute inset-0 h-full w-full rounded-xl bg-cadat-gray text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex w-full h-full flex-col items-center justify-center p-6 ">
            <div className="flex w-full h-full items-center justify-center">
              <h1 className="text-center text-3xl mt-8 text-black">Tools</h1>
            </div>
            <div className="w-full h-full flex flex-wrap justify-around p-6 items-center">
              {props.technologies.map((technology) => {
                return (
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="sm:h-[35%] h-[32%] rounded-2xl p-4"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <section className="relative w-full h-full md:px-20 sm:px-20 px-6 sm:py-20 flex py-20">
      <div className="flex flex-col w-full h-full pt-6">
        <div className="w-full h-full">
          <h1 className="sm:mt-auto text-center font-black text-slate-gray mb-6 md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Skills
          </h1>
        </div>
        <div className="w-full h-fit flex sm:flex-row flex-wrap flex-col gap-5 items-center justify-center">
          {services.map((service, index) => {
            return (
              <ServiceCards
                key={`service-${index}`}
                index={index}
                {...service}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Service, "service");
