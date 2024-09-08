'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    imgSrc: string;
    imgClassname?: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) {
      if (scrollerRef.current.childElementCount === items.length) {
        addAnimation();
      }
    }
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);

      // Make carousel visible once fully initialized
      if (containerRef.current) {
        containerRef.current.style.visibility = 'visible';
      }
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s';
      containerRef.current.style.setProperty('--animation-duration', duration);
    }
  };

  return (
    <section className='mb-10 mt-4 sm:mt-0'>
      <div className='flex flex-col gap-6'>
        <h2 className='font-extralight z-50 text-lg text-center mb-5 text-white'>
          Trusted partners by Industrial Leaders.
        </h2>

        <div>
          <div
            ref={containerRef}
            style={{ visibility: 'hidden', height: 'auto' }} // Ensures the container is hidden initially
            className={cn(
              'scroller relative z-20 max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
              className
            )}
          >
            <ul
              ref={scrollerRef}
              className={cn(
                'flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap',
                start && 'animate-scroll',
                pauseOnHover && 'hover:[animation-play-state:paused]'
              )}
            >
              {items.map((item, idx) => (
                <div key={idx} className='flex items-center justify-center'>
                  <div
                    aria-hidden='true'
                    className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
                  ></div>
                  <div className={`${item.imgClassname}  relative mx-14`}>
                    <Image
                      src={item.imgSrc}
                      alt='img'
                      className='h-full w-full user-select-none pointer-events-none object-fill'
                      width={400}
                      height={600}
                    />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
