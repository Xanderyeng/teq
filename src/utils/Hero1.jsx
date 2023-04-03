import React from "react";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className=' h-screen m-auto relative top-0 '>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-center justify-center gap-5 z-5`}
      >
        <div className=''>
          <div className='flex flex-row items-center justify-center text-center'>
            <p className={`${styles.heroSubText} font-extralight font-poppins mt-2 text-white-100`}>
              "Shaping the Future "
              <br className='sm:block hidden' />
              of Climate Solutions
              <br className='sm:block hidden' />
              and Innovations in
              <br className='sm:block hidden' />
              Africa
            </p>
          </div>
        </div>
      </div>

       {/* "Welcome to the first-ever Climate Action Summit! This global gathering is dedicated to rallying the world to take urgent action on the climate crisis. Our focus is on the opportunities that Africa presents for achieving global net zero. Join us in shaping a sustainable future for all." */}

      {/* TEXT CARD */}

      {/* <div className='relative p-[3.2rem]'>
          <div className=' absolute bottom-0 left-0'>
            <img src={left} className='w-[45px] ' />
          </div>
          <div className='absolute top-0 right-0'>
            <img src={right} className='w-[52px] ' />
          </div>

          <div className='flex flex-col items-center justify-center text-center '>
            <p
              className={`${styles.heroSubText} font-extralight font-poppins mt-2 text-white-100`}
            >
              "&nbsp;Shaping the Future
              <br className='sm:block hidden' />
              of Climate Solutions
              <br className='sm:block hidden' />
              and Innovations in
              <br className='sm:block hidden' />
              Africa&nbsp;"
            </p>
          </div>
        </div> */}

      {/* TEXT CARD */}

      {/* <div className='relative p-[3.2rem]'>
          <div className=' absolute bottom-0 left-0'>
            <img src={left} className='w-[45px] ' />
          </div>
          <div className='absolute top-0 right-0'>
            <img src={right} className='w-[52px] ' />
          </div>

          <div className='flex flex-col items-center justify-center text-center '>
            <p
              className={`${styles.heroSubText} font-extralight font-poppins mt-2 text-white-100`}
            >
              "&nbsp;Shaping the Future
              <br className='sm:block hidden' />
              of Climate Solutions
              <br className='sm:block hidden' />
              and Innovations in
              <br className='sm:block hidden' />
              Africa&nbsp;"
            </p>
          </div>
        </div> */}

    </section>
  );
};

export default Hero;
