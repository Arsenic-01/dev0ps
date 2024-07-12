import React from 'react';
import WaterDropGrid from '../ui/WaterDropGrid';
import { Button } from '@nextui-org/button';

const WhoWeAre = () => {
  return (
    <section className="relative ">
      <div className="text-slat-100 h-[90vh] md:mt-16 overflow-hidden px-8 pb-12 pt-14 md:pt-10 sm:py-20 md:px-12 lg:mr-10 pl-10 md:py-32">
        <WaterDropGrid />

        <div className="relative mx-auto max-w-7xl ">
          <div className="pointer-events-none relative z-10">
            <div className="opacity-1 transform:none">
              <h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl">
                Who We Are
                <span className="text-red-600">.</span>
              </h1>
              <div
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600"
                style={{ left: '100%' }}
              ></div>
            </div>
          </div>
          <div className="pointer-events-auto relative mt-11 z-10 flex justify-between gap-20">
            <div className="opacity-1 transform:none flex flex-col items-start gap-12">
              <p className="pointer-events-auto md:leading-loose font-semibold max-w-3xl text-base sm:text-lg lg:text-xl  text-slate-300 ">
                At Sunil Bhor & Associates, we&apos;re passionate about turning
                your dreams into reality. As a professional consultancy firm, we
                offer a wide range of services, including architectural
                planning, structural design, project management consultancy, and
                property valuation for residential, commercial, and industrial
                projects all over India.
                <br /> Our team is led by the talented Mr. Sunil Bhor, an
                architectural engineer with a wealth of experience in
                architectural engineering services. Based in Nashik with a
                branch in Thane, Mumbai, we are fully equipped with the latest
                infrastructure and technology to provide top-notch service. Our
                highly qualified and experienced professionals are here to
                ensure your projects are handled with expertise and care.
              </p>
              <Button color="primary" variant="shadow" radius="full">
                View Team
              </Button>
              <div
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600"
                style={{ left: '100%' }}
              ></div>
            </div>
            {/* <img
              src="/about.jpg"
              alt=""
              className="w-[30%] rounded-xl lg:block hidden"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
