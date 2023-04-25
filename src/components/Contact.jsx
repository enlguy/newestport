import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Contact = () => {
  const inputStyles = `mb-5 w-full rounded-lg bg-blue px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`xl:mt-12 py-20 flex xl:flex-row mr-2 gap-10 overflow-hidden h-screen`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Reach out</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>

      <div id="contact" className="mt-10 justify-between gap-8 md:flex">
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/0e87408afde8f2e5274758540aa04a18"
          method="POST"
        >
          <input
            className={inputStyles}
            type="text"
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="mt-1 text-blue">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" &&
                "Maximum length is 100 characters."}
            </p>
          )}
          <input
            className={inputStyles}
            type="text"
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="mt-1 text-primary-500">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address"}
            </p>
          )}
          <textarea
            className={inputStyles}
            rows={4}
            cols={50}
            placeholder="MESSAGE"
            {...register("message", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.message && (
            <p className="mt-1 text-primary-500">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Maximum length is 2000 characters."}
            </p>
          )}

          <button
            type="submit"
            className="mb-10 mt-5 rounded-lg bg-tertiary px-20 py-3 transition duration-500 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
