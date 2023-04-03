import React from "react";

export const Hero = () => {
  return (
    // h-[545px]
    <section className='relative z-20 w-full h-[90vh] border-0 border-pink '>
      {/* border-2 border-pink */}
      <div
      //  max-h-475
        className={`absolute inset-0 top-[70px] max-h-[90vh] bg-backdrop bg-no-repeat bg-center bg-100% mx-auto flex flex-row justify-center gap-5 border-0 border-red `}
        //
      >
      {/* h-[455px] */}
        <div className='absolute inset-0 z-0 w-full overlay flex flex-col items-start justify-center border-0 border-green'></div>
          {/* border-2 border-yellow */}
              {/* Hero */}
          <div className='relative h-full w-[75vw] flex flex-row items-center '>
          {/* border-2 border-red */}
            <div
              className=' flex flex-col justify-center border-0 border-pink
    '
            >
              <span className='font-sans'>
                <p className='text-[4.2rem] font-semibold '>Empowering your</p>
                <p className='capitalize font-bold text-mask text-[4.2rem]'>
                  tech journey
                </p>
              </span>
            </div>
          </div>
        
      </div>
    </section>
  );
};
