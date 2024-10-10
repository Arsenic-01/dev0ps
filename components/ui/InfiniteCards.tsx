'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface InfiniteMovingCardsProps {
  items: {
    imgSrc: string;
    imgClassname?: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Check if scroller is initialized and has the items.
    if (
      scrollerRef.current &&
      scrollerRef.current.childElementCount === items.length
    ) {
      initializeCarousel();
    }
  }, []);

  const initializeCarousel = () => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone the items to create a continuous scrolling effect
      scrollerContent.forEach((item) => {
        const clonedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(clonedItem);
      });

      // Set direction and speed based on props
      updateDirection();
      updateSpeed();

      // Start the animation
      setStart(true);

      // Ensure no layout shift by making the container visible after initialization
      if (containerRef.current) {
        containerRef.current.style.visibility = 'visible';
      }
    }
  };

  const updateDirection = () => {
    if (containerRef.current) {
      const animationDirection = direction === 'left' ? 'forwards' : 'reverse';
      containerRef.current.style.setProperty(
        '--animation-direction',
        animationDirection
      );
    }
  };

  const updateSpeed = () => {
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
            style={{ visibility: 'hidden' }} // Hidden initially to avoid flicker
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
                <li key={idx} className='flex items-center justify-center'>
                  <div className='relative mx-14'>
                    <Image
                      src={item.imgSrc}
                      alt='logo'
                      className={cn(
                        item.imgClassname,
                        'user-select-none pointer-events-none object-contain'
                      )}
                      width={200}
                      height={100} // Fixed height and width to prevent layout shift
                      priority={true} // Ensure images load quickly
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
