import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const StatsCard = ({ title, number, icon, index }) => {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setcounterOn(true)}
      onExit={() => setcounterOn(false)}
    >
      <div className='flex flex-col justify-center [nth-child(even)]:text-center'>
        <span className='font-poppins font-bold text-[4rem] text-mask-2 capitalize'>
          {counterOn && (
            <CountUp start={0} end={number} duration={1.5} delay={index/1.75} />
          )}
          {icon}
        </span>
        <p className='font-inter text-[1.8rem] font-light capitalize text-text-gray'>
          &nbsp;&nbsp;{title}
        </p>
      </div>
    </ScrollTrigger>
  );
};
