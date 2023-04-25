import React from "react";

import { technologies } from "../constants";
import { styles } from "../styles";
import Class from "./Class";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="gap-10">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] justify-start mx-auto">
        Tech.
      </h2>
      <div className="mt-20 h-[353px] w-full overflow-x-auto">
        <ul className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <Class key={technology.name} icon={technology.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tech;
