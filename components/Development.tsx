import React from 'react';

const Development = () => {
  return (
    <section className='relative radial-2 w-full rounded-3xl flex justify-center items-center  lg:my-36 my-16 px-4 md:px-7 py-7 md:py-14'>
      <div className='max-w-7xl w-full'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-4xl md:text-4xl lg:text-5xl font-bold text-center md:text-left'>
            We <span className='text-green-300'>reduce</span> development{' '}
            <span className='text-red-400'>risk</span>
          </h2>
          <div className='flex flex-col md:flex-row justify-around gap-7 lg:gap-20  select-none mt-12 sm:mt-16  '>
            <div className='rounded-xl p-7 flex flex-col text-left gap-5 md:gap-10 justify-center items-center cardglass'>
              <img
                src='/d1.svg'
                alt=''
                className='lg:w-24 w-20 select-none pointer-events-none'
              />
              <h3 className='capitalize text-lg md:text-xl lg:text-2xl'>
                Cost Effective Design
              </h3>
            </div>
            <div className='rounded-xl p-7 flex flex-col text-left gap-5 md:gap-10 justify-center items-center cardglass'>
              <img
                src='/d2.svg'
                alt=''
                className='lg:w-24 w-20 select-none pointer-events-none'
              />
              <h3 className='capitalize text-lg md:text-xl lg:text-2xl'>
                Informed Decisions
              </h3>
            </div>
            <div className='rounded-xl p-7 flex flex-col text-left gap-5 md:gap-10 justify-center items-center cardglass'>
              <img
                src='/d3.svg'
                alt=''
                className='select-none pointer-events-none lg:w-20 w-16'
              />
              <h3 className='capitalize text-lg md:text-xl lg:text-2xl'>
                Meet Deadlines
              </h3>
            </div>
            <div className='rounded-xl p-7 flex flex-col text-left gap-5 md:gap-10 justify-center items-center cardglass'>
              <img
                src='/d4.svg'
                alt=''
                className='lg:w-20 w-16 select-none pointer-events-none'
              />
              <h3 className='capitalize text-lg md:text-xl lg:text-2xl'>
                Development Success
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
