'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ServiceCards } from '@/data';
import Image from 'next/image';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className='embla lg:margin-auto'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {ServiceCards.map((el) => (
            <div className='embla__slide' key={el.id}>
              <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Card
                  sx={{
                    maxWidth: 350,
                    backgroundColor: 'black',
                    color: 'white',
                    border: '1px solid #252525',
                    borderRadius: '6px',
                    paddingBottom: '10px',
                  }}
                >
                  <CardActionArea>
                    <div className='w-full h-48 relative overflow-hidden rounded-t-md'>
                      <Image
                        src={el.imgSrc}
                        alt='services images'
                        className='w-full h-full absolute rounded-t-md object-cover select-none pointer-events-none'
                        width={1000}
                        height={600}
                        loading='lazy'
                      />
                    </div>

                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {el.title}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {el.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ThemeProvider>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Previous</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Next</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className='embla__progress'>
          <div
            className='embla__progress__bar'
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
