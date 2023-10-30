import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ExperienceCard = (props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#c2b7ae", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #c2b7ae" }}
      date={props.experience.date}
      dateClassName="text-[#2f1b12] font-semibold"
      iconStyle={{
        background: props.experience.iconBg,
        color: "#fff",
        boxShadow: "0 0 0 4px #c3c3c3",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={props.experience.icon}
            alt={props.experience.company_name}
            className="w-2/3"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#2f1b12] text-[24px] font-bold">
          {props.experience.title}
        </h3>
        <p
          className="text-[#714423] text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {props.experience.company_name}
        </p>
      </div>
      <div>
        <h3 className="text-[#2f1b12] text-[24px] font-bold">Overview</h3>
        <p
          className="text-[#714423] text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {props.experience.points.Project.Overview}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {props.experience.points.Project.Achievements.map(
          (achievement, index) => {
            return (
              <>
                {achievement.SubCategories.map((subCategorie, subIndex) => {
                  return (
                    <li
                      key={`description-${subIndex}`}
                      className="text-[#2f1b12] text-[14px] pl-1 tracking-wider"
                    >
                      {subCategorie.Description}
                    </li>
                  );
                })}
                <li
                  key={`metric-${index}`}
                  className="text-[#2f1b12] text-[14px] pl-1 tracking-wider"
                >
                  {achievement.Metric}
                </li>
              </>
            );
          }
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="relative w-full h-full md:px-20 sm:px-20 px-6 sm:py-20 flex py-20">
      <div className="flex flex-col w-full h-full pt-6">
        <motion.div variants={textVariant()} className="w-full h-full">
          <h2 className="text-[#572d04] sm:mt-auto mb-6 font-black text-center md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Work Experience
          </h2>
        </motion.div>

        <div className="flex flex-col">
          <VerticalTimeline lineColor="#c3c3c3">
            {experiences.map((experience, index) => {
              return (
                <ExperienceCard
                  key={`experience-point-${index}`}
                  experience={experience}
                />
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
