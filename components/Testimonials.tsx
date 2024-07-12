import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Check, Sparkles, Star } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

export function Testimonials() {
  return (
    <section className='mt-32 lg:p-16 h-full'>
      <h1 className='font-semi-bold text-center relative leading-relaxed text-pretty text-4xl lg:text-5xl xl:text-6xl skew-highlight'>
        Kind words from{' '}
        <span className='highlight md:inline-block	 hidden  relative z-[1] text-black font-semibold'>
          satisfied
        </span>{' '}
        <span className='md:hidden inline-block  text-red-400 font-semibold'>
          satisfied
        </span>{' '}
        clients✨
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
        className='w-full z-30 mt-20 md:mt-32'
      >
        <CarouselContent className='-ml-1'>
          <CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                    <div className='flex gap-0.5 mb-2'>
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    </div>
                    <div className='text-lg leading-8'>
                      <p>
                        &quot;I usually keep my phone together with my keys in
                        my pocket and that led to some pretty heavy scratchmarks
                        on all of my last phone cases. This one, besides a
                        barely noticeable scratch on the corner,{' '}
                        <span className='p-0.5 bg-slate-800 text-white'>
                          looks brand new after about half a year
                        </span>
                        . I dig it.&quot;
                      </p>
                    </div>
                    <div className='flex gap-4 mt-2'>
                      <img
                        className='rounded-full h-12 w-12 object-cover'
                        src='/users/user-4.jpg'
                        alt='user'
                      />
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Josh</p>
                        <div className='flex gap-1.5 items-center text-zinc-600'>
                          <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                          <p className='text-sm'>Verified Purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                    <div className='flex gap-0.5 mb-2'>
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    </div>
                    <div className='text-lg leading-8'>
                      <p>
                        &quot;I usually keep my phone together with my keys in
                        my pocket and that led to some pretty heavy scratchmarks
                        on all of my last phone cases. This one, besides a
                        barely noticeable scratch on the corner,{' '}
                        <span className='p-0.5 bg-slate-800 text-white'>
                          looks brand new after about half a year
                        </span>
                        . I dig it.&quot;
                      </p>
                    </div>
                    <div className='flex gap-4 mt-2'>
                      <img
                        className='rounded-full h-12 w-12 object-cover'
                        src='/users/user-4.jpg'
                        alt='user'
                      />
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Josh</p>
                        <div className='flex gap-1.5 items-center text-zinc-600'>
                          <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                          <p className='text-sm'>Verified Purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                    <div className='flex gap-0.5 mb-2'>
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    </div>
                    <div className='text-lg leading-8'>
                      <p>
                        &quot;I usually keep my phone together with my keys in
                        my pocket and that led to some pretty heavy scratchmarks
                        on all of my last phone cases. This one, besides a
                        barely noticeable scratch on the corner,{' '}
                        <span className='p-0.5 bg-slate-800 text-white'>
                          looks brand new after about half a year
                        </span>
                        . I dig it.&quot;
                      </p>
                    </div>
                    <div className='flex gap-4 mt-2'>
                      <img
                        className='rounded-full h-12 w-12 object-cover'
                        src='/users/user-4.jpg'
                        alt='user'
                      />
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Josh</p>
                        <div className='flex gap-1.5 items-center text-zinc-600'>
                          <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                          <p className='text-sm'>Verified Purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                    <div className='flex gap-0.5 mb-2'>
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    </div>
                    <div className='text-lg leading-8'>
                      <p>
                        &quot;I usually keep my phone together with my keys in
                        my pocket and that led to some pretty heavy scratchmarks
                        on all of my last phone cases. This one, besides a
                        barely noticeable scratch on the corner,{' '}
                        <span className='p-0.5 bg-slate-800 text-white'>
                          looks brand new after about half a year
                        </span>
                        . I dig it.&quot;
                      </p>
                    </div>
                    <div className='flex gap-4 mt-2'>
                      <img
                        className='rounded-full h-12 w-12 object-cover'
                        src='/users/user-4.jpg'
                        alt='user'
                      />
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Josh</p>
                        <div className='flex gap-1.5 items-center text-zinc-600'>
                          <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                          <p className='text-sm'>Verified Purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                    <div className='flex gap-0.5 mb-2'>
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    </div>
                    <div className='text-lg leading-8'>
                      <p>
                        &quot;I usually keep my phone together with my keys in
                        my pocket and that led to some pretty heavy scratchmarks
                        on all of my last phone cases. This one, besides a
                        barely noticeable scratch on the corner,{' '}
                        <span className='p-0.5 bg-slate-800 text-white'>
                          looks brand new after about half a year
                        </span>
                        . I dig it.&quot;
                      </p>
                    </div>
                    <div className='flex gap-4 mt-2'>
                      <img
                        className='rounded-full h-12 w-12 object-cover'
                        src='/users/user-4.jpg'
                        alt='user'
                      />
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Josh</p>
                        <div className='flex gap-1.5 items-center text-zinc-600'>
                          <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                          <p className='text-sm'>Verified Purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                    <div className='flex gap-0.5 mb-2'>
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                      <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    </div>
                    <div className='text-lg leading-8'>
                      <p>
                        &quot;I usually keep my phone together with my keys in
                        my pocket and that led to some pretty heavy scratchmarks
                        on all of my last phone cases. This one, besides a
                        barely noticeable scratch on the corner,{' '}
                        <span className='p-0.5 bg-slate-800 text-white'>
                          looks brand new after about half a year
                        </span>
                        . I dig it.&quot;
                      </p>
                    </div>
                    <div className='flex gap-4 mt-2'>
                      <img
                        className='rounded-full h-12 w-12 object-cover'
                        src='/users/user-4.jpg'
                        alt='user'
                      />
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Josh</p>
                        <div className='flex gap-1.5 items-center text-zinc-600'>
                          <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                          <p className='text-sm'>Verified Purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
