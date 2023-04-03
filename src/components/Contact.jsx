import React from "react";

export const Contact = () => {
  return (
    <section className='relative z-0 h-auto flex items-center flex-col py-0 justify-center border-2 border-blue '>
      <div className='flex flex-col gap-4 relative justify-center items-center'>
        <span className='font-poppins font-semibold text-[1.8rem] flex flex-col text-mask capitalize'>
         contact us.
        </span>
        <p className='font-poppins text-[3.2rem] font-semibold capitalize'>
          {/* Accelerate your growth */}
          get in touch with us
          {/* Trust the numbers: Our courses make a difference. */}
        </p>
      </div>
      <div className='grid grid-cols-2 gap-32 rounded-21 border-2 border-pink w-[75vw] py-32'>
        <div className='border-2 border-red'>contact</div>
        <div className='border-2 border-red'>contact</div>
      </div>
    </section>
  );
};
