import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Check, Star, StarHalf } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import BlurFade from './magicui/blur-fade';

export function Testimonials() {
  const TestimonialData = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      userImg: '/users/user-1.png',
      rating: 5,
      comment:
        'SBA exceeded our expectations with their architectural planning and structural design. Our commercial project was completed on time, and the final result was beyond what we imagined.',
      secondComment: 'Highly recommend their services!',
      highlighted: 'exceeded our expectations',
    },
    {
      id: 2,
      name: 'Priya Verma',
      userImg: '/users/user-2.png',
      rating: 4,
      halfrating: 1,
      comment:
        'We entrusted SBA with the project management consultancy for our residential development. Their attention to detail and commitment to timelines were impressive. We couldn’t be happier.',
      secondComment: 'Thank you, SBA!',
      highlighted: 'commitment to timelines',
    },
    {
      id: 3,
      name: 'Sunita Joshi',
      userImg: '/users/user-3.png',
      rating: 5,
      comment:
        'Working with SBA for the structural design of our industrial project was a great experience. They provided innovative solutions and ensured everything was in line with our budget.',
      secondComment: 'Great experience!',
      highlighted: 'innovative solutions',
    },
    {
      id: 4,
      name: 'Amit Patil',
      userImg: '/users/user-4.jpg',
      rating: 5,
      comment:
        'SBA’s property valuation services were spot on. They provided a detailed and accurate assessment for our commercial property, helping us make informed decisions.',
      secondComment: 'Will definitely use their services again!',
      highlighted: 'detailed and accurate assessment',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      userImg: '/users/user-5.jpg',
      rating: 4,
      comment:
        'SBA handled the architectural planning and structural design for our residential project in Nashik. The entire process was smooth, and the end result was a beautifully designed home.',
      secondComment: 'Highly satisfied with their work!',
      highlighted: 'beautifully designed home',
    },
  ];

  return (
    <section className='mt-32 lg:p-16 h-full'>
      <BlurFade delay={0.1} inView>
        <h1 className='bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl lg:text-6xl  font-medium tracking-tight text-transparent'>
          Kind Words from Satisfied Clients
        </h1>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 7000,
            }),
          ]}
          className='w-full z-30 mt-20 md:mt-32 '
        >
          <CarouselContent className='-ml-1 hover:cursor-grab select-none	'>
            {TestimonialData.map((item) => (
              <CarouselItem
                key={item.id}
                className='pl-1 md:basis-1/2 lg:basis-1/3 rounded-lg'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='bg-black flex aspect-square rounded-lg items-center justify-center p-6'>
                      <div className='flex flex-auto flex-col gap-4 '>
                        <div className='flex gap-0.5 mb-2'>
                          {Array.from({ length: item.rating }).map(
                            (_, index) => (
                              <Star
                                className='h-5 w-5 text-green-600 fill-green-600'
                                key={index}
                              />
                            )
                          )}
                          {item.halfrating !== undefined &&
                            item.halfrating > 0 &&
                            Array.from({ length: item.halfrating }).map(
                              (_, index_half) => (
                                <StarHalf
                                  className='h-5 w-5 text-green-600 fill-green-600'
                                  key={index_half}
                                />
                              )
                            )}
                        </div>
                        <div className='text-lg leading-8'>
                          <p>
                            &quot;
                            {item.comment}
                            <span className='p-0.5 bg-slate-800 text-white'>
                              {item.secondComment}
                            </span>
                            &quot;
                          </p>
                        </div>
                        <div className='flex gap-4 mt-2'>
                          <img
                            className='rounded-full h-12 w-12 object-cover'
                            src={`${item.userImg}`}
                            alt='user'
                          />
                          <div className='flex flex-col'>
                            <p className='font-semibold'>{item.name}</p>
                            <div className='flex gap-1.5 items-center text-zinc-600'>
                              <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                              <p className='text-sm'>Verified Client</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </BlurFade>
    </section>
  );
}
