import Image from 'next/image';
import React from 'react';
import { organization } from '@/data/index';

const OurTeam = () => {
  return (
    <div className="max-w-7xl mt-7  xl:mt-24 mb-10 px-8">
      <h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl">
        Meet the Team<span className="text-red-600">.</span>
      </h1>
      <div className="mt-24  grid-cols-1 sm:grid-cols-2 grid  md:grid-cols-3 xl:grid-cols-4 gap-7">
        {organization.map((team, index) => {
          return (
            <div
              className="border-[1px] cursor-pointer hover:border-gray-700 hover:shadow-sm transition-all ease-in-out rounded-lg  p-3"
              key={index}
            >
              <Image
                src={team.imgSrc}
                alt="alt"
                width={200}
                height={300}
                className="h-[250px] sm:h-[340px] w-full object-cover rounded-lg"
              />
              <div className="mt-3 items-baseline gap-1 flex flex-col text-wrap break-words">
                <h2 className="font-bold text-xl mb-2 mt-1">{team.name}</h2>

                <h2 className="text-base text-white-100 bg-neutral-800/80 py-1 rounded-xl px-2">
                  {team.position}
                </h2>
                {team.keyperson ? (
                  <p className="text-base	mb-2 mt-2 bg-red-600/40 rounded-full px-2 py-1 text-slate-300">
                    Key Person
                  </p>
                ) : null}

                <p className="text-base	mb-2 mt-2 text-slate-300">
                  {team.experience} of Experience
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
