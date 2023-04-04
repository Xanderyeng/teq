import React from 'react'

const Hero = () => {
  return (
    <section className='relative z-20 w-full h-[90vh] border-0 border-pink '>
    
    <div
      className={`absolute inset-0 top-[55px] max-h-[80vh] bg-backdrop bg-no-repeat bg-center bg-100% mx-auto flex flex-row justify-center gap-5 border-0 border-red `}
     
    >
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
  )
}

export default Hero