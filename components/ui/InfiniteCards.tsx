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

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
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
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <section className='pb-20 mt-12 lg:pb-32 xl:pb-36'>
      <div className='flex flex-col gap-10'>
        <h2 className='font-extralight text-lg text-center mb-5 text-white'>
          Trusted partners by Industrial Leaders.
        </h2>
        <div>
          <div
            ref={containerRef}
            className={cn(
              // max-w-7xl to w-screen
              'scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
              className
            )}
          >
            <ul
              ref={scrollerRef}
              className={cn(
                // change gap-16
                ' flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap',
                start && 'animate-scroll ',
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
                      className='h-full w-full user-select-none pointer-events-none object-fill '
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
