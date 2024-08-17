// @ts-nocheck
import anime from 'animejs';

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
  const handleDotClick = (e) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 0, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className='group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600'
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-900 to-gray-700	 opacity-50 group-hover:from-indigo-600 group-hover:to-white'
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }
  //  from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-whi
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
