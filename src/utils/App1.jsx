import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, Participate, Partner, About } from "./components";
import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-cover bg-no-repeat bg-center'>
        {/*  bg-hero-backdrop */}
        {/*  bg-[#007549] */}
        {/* bg-overlay/50 */}
        {/* opacity-25 */}
        <div className=''>
          <div className='bg-hero-backdrop bg-overlay bg-blend-multiply bg-no-repeat bg-top bg-100% relative z-2'>
            <div className='bg-gradient-maskk h-[100%] absolute w-full z-[4] '>
              <div className='bg-map bg-100% bg-blend-multiply bg-center-6 bg-no-repeat absolute h-[100%] w-full z-[10] opacity-[0.1]'></div>
            </div>

            <div className='w-full bg-cover bg-no-repeat bg-center-6 relative z-[1]'>
              <Navbar />
              <Hero />
            </div>
            {/* HERO DIVS */}

            <div className='bg-overlay-maskk relative mt-[16.4rem] z-[3]'>
              <div className=' text-yellow text-[32px] font-bold h-[150px] w-full relative bottom-0 z-[30]'>
                <div
                  className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-center justify-center gap-5 z-5`}
                >
                  {/* TEXT RESUABLE */}

                  <div className='flex flex-row items-center justify-center text-center'>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                      "Forging a Path"
                      <br className='sm:block hidden' />
                      to a New
                      <br className='sm:block hidden' />
                      Paradigm
                    </p>
                  </div>
                </div>
              </div>
              <div className=' text-secondary text-[32px] font-bold h-[150px] w-full relative bottom-0'>
                {" "}
                div 2
              </div>
              <div className=' text-secondary text-[32px] font-bold h-[150px] w-full relative bottom-0'>
                {" "}
                div 3
              </div>
              <div className=' text-secondary text-[32px] font-bold h-[150px] w-full relative bottom-0'>
                {" "}
                div 4
              </div>
            </div>
          </div>
        </div>
        <Participate />
        <Partner />
        {/* climate change */}
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
