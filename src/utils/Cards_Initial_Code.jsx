            {/* ------------ SAMPLE CARD --------------- */}
            <div className='relative z-5 rounded-[21px] transition-colors duration-700 ease-in-out card-gradient p-0.5'>
              {/* ADDS THE ILLUSION OF A GRADIENT OUTLINE SHIMMER */}
              <div className='relative z-1 inset-0 rounded-[21px] bg-black'>
                <div
                  className={`${styles.paddingCard} relative z-25 flex flex-col flex-nowrap gap-4 items-center rounded-[21px] card-outline bg-secondary hover:cursor-pointer`}
                >
                  <span className='flex items-center justify-center'>
                    <img src={designSVG} className='w-24 h-24' />
                  </span>
                  <p className='text-primary text-center text-[2rem] pt-6'>
                    Data Analytics
                  </p>
                  <p className='text-text-gray text-center text-[1.6rem] pt-6'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    enim ad minim veniam
                  </p>
                </div>
              </div>
            </div>
            {/* ----------------- */}