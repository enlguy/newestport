import { motion } from "framer-motion";
import { styles } from "../styles";
import headshot from "../assets/portheadshot.png";
import arrow from "../assets/scroll-up.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}
      >
        <img
          className="h-auto max-w-lg ml-5 rounded-lg"
          src={headshot}
          alt="jack epner photo"
        />
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3e75b5]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white ml-10`}>
            Hey, it's <span className="text-[#3e75b5]">Jack</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 ml-10`}>
            Hi there, I'd love to connect with you
          </p>
          <p className="mt-20 ml-10">
            We can talk about life, web development, sales, marketing, travel,
            skiing, hiking, feelings, whatever you'd like.
          </p>
          <div className="flex">
            <a href="https://github.com/enlguy" target="_blank">
              <img
                className="h-20 w-20 mt-20 ml-40 filter-white"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
            </a>
            <a href="https://linkedin.com/in/jack-epner" target="_blank">
              <img
                className="h-20 w-20 mt-20 ml-60"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-1 bottom-2 w-full flex justify-center items-center">
        <div>
          <img class="animate-bounce w-10 h-10" src={arrow} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
