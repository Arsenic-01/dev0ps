import { ProjectData } from '@/data';
import Image from 'next/image';
import React from 'react';
import { BreadcrumbWithCustomSeparator } from './OurServices';

const ProjectGrid = () => {
  return (
    <div className='max-w-7xl mb-10 px-8'>
      <BreadcrumbWithCustomSeparator currentPage='Recent Projects' />
      <div className='mt-10 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-7'>
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className='cursor-pointer snap-y bg-neutral-950 border-[0.5px] border-[#2b2b2b] hover:scale-[1.01] transition-all rounded-lg p-3'
          >
            <div className='flex flex-col gap-8 justify-between w-full h-full'>
              <div>
                <div className='w-full h-60 relative overflow-hidden rounded-md'>
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    className='w-full h-full absolute rounded-md object-cover select-none pointer-events-none'
                    width={1000}
                    height={600}
                    quality={100}
                    loading='eager'
                  />
                </div>
                <h1 className='mt-3 text-lg lg:text-xl'>{project.title}</h1>
                <div className='flex gap-2 font-semibold text-sm mt-2 flex-wrap mb-5'>
                  <div className='bg-red-900/70 text-red-500 rounded-md px-2 py-1'>
                    {project.type}
                  </div>
                  <div className='bg-green-900/60 text-green-500 rounded-md px-2 py-1'>
                    {project.loc}
                  </div>
                  <div className='bg-blue-900/50 text-blue-400 rounded-md px-2 py-1'>
                    {project.duration}
                  </div>
                </div>
                <p className='text-neutral-300 my-3 text-sm'>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
