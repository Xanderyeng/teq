import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

export const CoursesCard = ({ index, icon, title, text }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.75 * index, 0.75)}
      className='flex justify-center align-center py-4 gap-16'
    >
      <div
        className={`relative z-50 flex flex-col flex-nowrap gap-4 items-center rounded-21 transition all ease-in-out delay-150 bg-transparent hover:bg-gradient-to-b from-[#DE89FC] via-[#9AC2FE] to-[#88D2FF] p-[1px] hover:-translate-y-1 hover:scale-105 duration-300 hover:cursor-pointer`}
        options={{ max: 5, scale: 1, speed: 450 }}
      >
        <div className='absolute top-[1px] h-[99%] w-[99%] rounded-21 bg-black z-10' />
        {/* WHEN HOVER SHOWS THE CUSTOM COLOR ON CARD BACKGROUND */}
        {/* HOLDS GREY BEFORE HOVER */}
        <div
          className={`${styles.paddingCard} relative z-20 flex flex-col h-[100%] w-[100%] items-center justify-center bg-secondary hover:bg-card-bg-2 rounded-21`}
        >
          <span className='flex items-center justify-center w-24 h-24 card-svg'>
            
            {icon}
          </span>
          <p className='text-primary text-center capitalize text-[1.8rem] pt-6'>
            {title}
          </p>
          <p className='text-text-gray text-center text-[1.4rem] pt-6'>
            {text}
          </p>
          <div className='relative mt-10 z-0 p-[1px] rounded-21 bg-gradient-to-b from-[#DE89FC] via-[#9AC2FE] to-[#88D2FF]'>
          <div className='absolute top-[1px] left-[1px] h-[96%] w-[98%] rounded-21 bg-black z-0' />
            <button className='relative px-14 py-4 text-primary capitalize text-[1.6rem] bg-secondary rounded-21 hover:bg-gradient-to-b from-[#DE89FC] via-[#9AC2FE] to-[#88D2FF] hover:text-black'>See more</button>
          </div>
         
        </div>
      </div>
    </motion.div>
  );
};
