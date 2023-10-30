import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_stvgf72",
        "template_lv2s4oc",
        {
          from_name: form.name,
          to_name: "Lin Jia Yuan",
          from_email: form.email,
          to_email: "jiayuanlin838@gmail.com",
          message: form.message,
        },
        "NfUP4t2cxk1gtICq3"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <section className="w-full h-full mx-auto flex sm:py-40 py-40 md:px-20 sm:px-20 px-6 content-center justify-center">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden w-full h-full pt-6">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#b9b2ab] p-8 rounded-2xl sm:ml-20"
        >
          <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[#e7e5e3] py-4 px-6 placeholder:text-black text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-[#e7e5e3] py-4 px-6 placeholder:text-black text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-[#e7e5e3] py-4 px-6 placeholder:text-black text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-[#675d54] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] mb-20"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
