'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ServiceCards } from '@/data';

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
              <div className='embla__slide__number'>
                <ThemeProvider theme={darkTheme}>
                  <CssBaseline />
                  <Card sx={{ maxWidth: 350 }}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        width='200'
                        height='100'
                        image={el.imgSrc}
                        loading='lazy'
                        alt='services images'
                      />
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
                </ThemeProvider>{' '}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
