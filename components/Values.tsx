import React from 'react';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });

const Values = () => {
  return (
    <div className="flex justify-between lg:gap-11 lg:mb-20">
      <div className="flex flex-col justify-center p-5 lg:ml-10 gap-7">
        <h3 className="text-3xl md:text-4xl xl:text-5xl font-medium	 sm:text-left text-center">
          Support development{' '}
          <span className={`${playfair.className} text-green-400`}>
            success
          </span>{' '}
          and build lasting{' '}
          <span className={`${playfair.className} text-red-400`}>
            relationships
          </span>
        </h3>
        <div className="flex justify-center gap-3">
          —
          <div className="flex flex-col gap-6">
            <p className="text-base sm:text-lg">
              SBA is built on positive culture and customer focus. Our
              experience in high-rise design , large scale developments and
              steel manufacturing yielded systems that produce predictable and
              repeatable results. Aligned to our mission, SBA is positioned to
              deliver a better experience to architects and CRE developers
              across the country.
            </p>
            <a
              href="/aboutus"
              className="text-red-400 hover:underline underline-offset-8 text-xl"
            >
              <span className=" inline-flex justify-start gap-1  ">
                More about us{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#f87171"
                >
                  <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <img
        src="/building2.png"
        alt=""
        className="hidden md:block md:w-80 lg:w-96"
      />
    </div>
  );
};

export default Values;
