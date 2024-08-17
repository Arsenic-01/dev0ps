import React from 'react';
import { Playfair_Display } from 'next/font/google';
import BoxReveal from '../magicui/box-reveal';
import BlurFade from '../magicui/blur-fade';

const playfair = Playfair_Display({ subsets: ['latin'] });

function Work() {
  return (
    <section className='mt-20 rounded-xl bg-black border-[0.5px]	border-[#353535] md:border-[#1f1f1f] '>
      <div className='flex flex-col gap-10 rounded-3xl py-10 px-4 text-white  h-3/6 w-full '>
        <BlurFade delay={0.1} inView>
          <h2
            className={`${playfair.className} text-center text-3xl sm:text-4xl lg:text-5xl`}
          >
            Who do we <span className='text-red-400 font-bold'>work for</span>
          </h2>
        </BlurFade>
        <div className='mt-4 sm:mt-7 flex flex-col lg:flex-row justify-center px-0 sm:px-8 gap-6 lg:text-4xl'>
          <div className='text-left flex flex-col gap-7 sm:gap-10 rounded-lg p-5 bg-zinc-950 border-[0.5px] duration-300 border-[#353535] md:border-[#1f1f1f] hover:border-collapse hover:bg-[#1F1F1F] transition-all active:bg-[#1F1F1F] active:border-collapse hover:cursor-pointer'>
            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <h2 className='text-red-400 text-4xl lg:text-5xl font-semibold'>
                01
              </h2>
            </BoxReveal>
            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <p className='uppercase text-2xl sm:text-3xl lg:text-4xl'>
                architects
              </p>
            </BoxReveal>

            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <p className='text-base'>
                We collaborate closely with architects, fostering creativity and
                precision to deliver innovative, functional designs that exceed
                client expectations.
              </p>
            </BoxReveal>
          </div>
          <div className='text-left flex flex-col gap-7 sm:gap-10 rounded-lg p-5 bg-zinc-950 border-[0.5px] duration-300	border-[#353535] md:border-[#1f1f1f] hover:border-collapse hover:bg-[#1F1F1F] transition-all active:bg-[#1F1F1F] active:border-collapse hover:cursor-pointer'>
            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <h2 className='text-red-400 text-4xl lg:text-5xl font-semibold'>
                02
              </h2>
            </BoxReveal>
            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <p className='uppercase text-2xl sm:text-3xl lg:text-4xl'>
                real estate developers
              </p>
            </BoxReveal>

            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <p className='text-base'>
                We understand judgment and capital allocation are crucial for
                real estate development success. Our team is here to help you
                minimize risk and allow you to allocate capital confidently.
              </p>
            </BoxReveal>
          </div>
          <div className='text-left flex flex-col gap-7 sm:gap-10 rounded-lg p-5 bg-zinc-950 border-[0.5px] duration-300	border-[#353535] md:border-[#1f1f1f] hover:border-collapse hover:bg-[#1F1F1F] transition-all active:bg-[#1F1F1F] active:border-collapse hover:cursor-pointer'>
            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <h2 className='text-red-400 text-4xl lg:text-5xl font-semibold'>
                03
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <p className='uppercase text-2xl sm:text-3xl lg:text-4xl'>
                design-build contrators
              </p>
            </BoxReveal>

            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <p className='text-base'>
                We engage proficiently with design-build contractors,
                harmonizing expertise for streamlined and innovative project
                execution and delivery.
              </p>
            </BoxReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
