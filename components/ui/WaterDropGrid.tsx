// @ts-nocheck
import anime from 'animejs';
import { useRef } from 'react';

const WaterDropGrid = () => {
  return (
    <div className='absolute left-1/3 sm:left-[50%] top-[75%] sm:top-[60%] z-0 grid max-w-[75%] -translate-y-[50%]'>
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const animationInProgress = useRef(false);

  const handleDotClick = (e) => {
    if (animationInProgress.current) return;

    animationInProgress.current = true;

    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.25, easing: 'easeOutCubic', duration: 200 },
        { value: 1, easing: 'easeInOutCubic', duration: 300 },
      ],
      translateY: [
        { value: -10, easing: 'easeOutCubic', duration: 200 },
        { value: 0, easing: 'easeInOutCubic', duration: 300 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutCubic', duration: 200 },
        { value: 0.6, easing: 'easeInOutCubic', duration: 300 },
      ],
      delay: anime.stagger(50, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
      complete: () => {
        animationInProgress.current = false;
      },
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className='group cursor-crosshair rounded-full p-2'
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-900 to-gray-700 opacity-50 group-hover:from-indigo-600 group-hover:to-white'
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className='grid w-fit'
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
