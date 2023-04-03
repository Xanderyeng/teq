import React from "react";
import { stats } from "../constants/Index";
import { StatsCard } from "../containers";

export const Success = () => {
  return (
    <section className='relative z-0 h-auto flex items-center py-0 justify-center border-0 border-blue '>
      <div className='absolute z-0 bottom-[30%] left-[12%] success-blur rounded-[100%] w-[15vw] h-[15vh]' />
      <div className='grid grid-cols-2 gap-32 border-0 border-pink h-[100%] w-[75vw] py-32'>
        {/* LEFT GRID BOX COL */}

        <div className='flex flex-col justify-start align-left py-16 border-0 border-red'>
          <div className='relative flex flex-col gap-4 items-start border-0 border-blue'>
            <span className='font-poppins font-semibold text-[1.8rem] flex flex-col text-mask capitalize'>
              our Success.
            </span>
            <p className='font-poppins text-[3.2rem] text-left font-semibold '>
              {/* Accelerate your growth */}
              Start your journey today.
              {/* Trust the numbers: Our courses make a difference. */}
            </p>
            <span className='font-inter text-[1.8rem] py-10 font-light text-text-gray'>
              Become part of our success story and join a community of thousands
              of satisfied graduates
            </span>
          </div>
          <div className='grid grid-cols-3 gap-8 justify-center align-center grid-rows-1'>
            {stats.map((stat, index) => (
              <StatsCard key={stat.title} index={index} {...stat} />
            ))}
          </div>
        </div>

        {/* IMAGE COL GRID BOX */}
        <div className='bg-stats bg-no-repeat bg-[80%] bg-cover max-w-[80%] rounded-21 shadow-2xl border-0 border-red' />
      </div>
      {/* Success */}
    </section>
  );
};
