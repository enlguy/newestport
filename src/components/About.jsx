import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import canyon from "../assets/canyon2.jpg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="jack epner web development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div id="about" variants={textVariant()}>
        <p className={styles.sectionSubText}>Me, Myself, and I</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p className="mt-4 mb-10 flex justify-between text-secondary text-[17px] leading-[30px]">
        <div className="flex-col">
          <p className="italic">
            - Trying to define yourself is like trying to bite your own teeth
          </p>
          <br />
          <br />
          <p className="font-normal">
            The quote says what need be said, but I'll try to let what others
            note, and personal experience, allow for a bit more. I grew up in
            three different countries, and have now lived in about 14. I have
            traveled many other places beyond those.
            <p className="mt-10">
              I have had several careers, including sales, film/TV (acting and
              production), teaching (classroom and private tutoring - from
              preschool to university and beyond with GMAT prep), marketing ops,
              and of course web development.
            </p>
            <p className="mt-10">
              I genuinely enjoy learning new things, growing, finding new
              inspirations, and trying to bring greater beauty to this world.
            </p>
          </p>
        </div>
        <img
          className="h-[600px] w-[750px] mr-0"
          src={canyon}
          alt="jack epner canyon picture"
        />
      </motion.p>
    </>
  );
};

export default About;
