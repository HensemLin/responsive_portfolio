import { portrait3, curly_pointer } from "../assets";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const Services = (props) => {
  return (
    <div className="flex flex-col justify-top">
      <div className="group w-full aspect-square py-4 px-2">
        <div className="bg-warm-gray rounded-xl w-full h-full flex items-center justify-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={props.icon} alt={props.title} className="w-[50%]" />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-warm-gray/40 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p className="text-white text-xs text-center absolute inset-0 flex items-center justify-center opacity-100 rotateY(180deg) backface-visibility-hidden transition-transform duration-500">
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="relative w-full h-full md:px-20 sm:px-20 px-6 sm:py-20 flex py-20">
      <div className="w-fit h-fit grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-3 auto-rows-auto text-warm-white pt-28">
        <div className="flex flex-col sm:col-span-3 sm:items-start items-center sm:px-6 p-2">
          <h1 className="sm:mt-auto font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            About Me
          </h1>
        </div>
        <div className="flex sm:row-span-3 sm:col-span-2 items-center justify-center">
          <div className="relative inline-block">
            <img className="sm:h-fit h-[400px]" src={portrait3}></img>
            <div class="absolute inset-0 border-2 border-black translate-x-3 translate-y-3 z-[5]"></div>
            <div className="box-border h-5 w-5 rotate-[-30deg] bg-[#e28743] -translate-x-[10px] top-[10%] absolute">
              <div className="box-border h-5 w-5 -translate-x-1 -translate-y-1 border-2 border-solid border-black relative"></div>
            </div>
            <div className="box-border w-1/5 sm:rotate-[170deg] rotate-[100deg] sm:-left-[20%] sm:top-[30%] sm:bottom-auto -bottom-[15%] right-[35%] absolute">
              <img src={curly_pointer} alt="curly_pointer" />
            </div>
          </div>
        </div>
        <div className="flex sm:col-span-3 sm:px-6 lg:text-sm text-xs sm:text-left text-center sm:mt-0 sm:mr-10 mt-16">
          <p>
            I am a graduate in Mechatronic Engineering with a strong passion for
            the world of software engineering and artificial intelligence. With
            a solid foundation in backend development, including Python, SQL,
            AWS, and FastAPI, I'm dedicated to expanding my skill set and
            becoming a well-rounded full-stack developer. My ability to quickly
            adapt and learn new technologies has been a driving force in my
            career. Let's work together to explore the limitless opportunities
            in software engineering and AI, and together, shape the future of
            technology!
          </p>
        </div>
        <div className="sm:col-span-3">
          <div className="grid grid-cols-4 sm:w-full sm:h-full h-[200px] sm:p-6">
            {services.map((service, index) => {
              return (
                <Services key={service.title} index={index} {...service} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
