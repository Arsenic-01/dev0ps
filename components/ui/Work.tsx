import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

function Work() {
  return (
    <section className="radial rounded-3xl">
      <div className="mt-20  flex flex-col gap-10 rounded-3xl py-10 px-4 text-white  h-3/6 w-full glassmorphism">
        <h2
          className={`${playfair.className} text-center text-3xl sm:text-4xl lg:text-5xl`}
        >
          Who do we <span className="text-red-400 font-bold">work for</span>
        </h2>
        <div className="mt-4 sm:mt-7 flex flex-col lg:flex-row justify-center px-0 sm:px-8 gap-6 lg:text-4xl">
          <div className="text-left flex flex-col gap-7 sm:gap-10 rounded-lg p-5 cardglass hover:hoverglass">
            <h2 className="text-red-400 text-4xl lg:text-5xl font-semibold">
              01
            </h2>
            <p className="uppercase text-2xl sm:text-3xl lg:text-4xl">
              architects
            </p>
            <p className="text-base">
              We collaborate closely with architects, fostering creativity and
              precision to deliver innovative, functional designs that exceed
              client expectations.
            </p>
          </div>
          <div className="text-left flex flex-col gap-7 sm:gap-10 rounded-lg p-5 cardglass hover:hoverglass">
            <h2 className="text-red-400 text-4xl lg:text-5xl font-semibold">
              02
            </h2>
            <p className="uppercase text-2xl sm:text-3xl lg:text-4xl">
              real estate developers
            </p>
            <p className="text-base">
              We understand judgment and capital allocation are crucial for real
              estate development success. Our team is here to help you minimize
              risk and allow you to allocate capital confidently.
            </p>
          </div>
          <div className="text-left flex flex-col gap-7 sm:gap-10 rounded-lg p-5 cardglass hover:hoverglass">
            <h2 className="text-red-400 text-4xl lg:text-5xl font-semibold">
              03
            </h2>
            <p className="uppercase text-2xl sm:text-3xl lg:text-4xl">
              design-build contrators
            </p>
            <p className="text-base">
              We engage proficiently with design-build contractors, harmonizing
              expertise for streamlined and innovative project execution and
              delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
