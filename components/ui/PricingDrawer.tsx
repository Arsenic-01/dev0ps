import * as React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { DrawerContext } from '@/context/DrawerContext';

const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
];

export function PricingDrawer() {
  const [goal, setGoal] = React.useState(350);
  if (!DrawerContext) {
    throw new Error(
      'PricingDrawer must be used within a DrawerContextProvider'
    );
  }
  const { isDrawerOpen, setisDrawerOpen } = React.useContext(DrawerContext)!;

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setisDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant='default' onClick={() => setisDrawerOpen(true)}>
          Pricing
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm z-[100]'>
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className='p-4 pb-0'>
            <div className='flex items-center justify-center space-x-2'>
              <Button
                variant='outline'
                size='icon'
                className='h-8 w-8 shrink-0 rounded-full'
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <span className='sr-only'>Decrease</span>
              </Button>
              <div className='flex-1 text-center'>
                <div className='text-7xl font-bold tracking-tighter'>
                  {goal}
                </div>
                <div className='text-[0.70rem] uppercase text-muted-foreground'>
                  Calories/day
                </div>
              </div>
              <Button
                variant='outline'
                size='icon'
                className='h-8 w-8 shrink-0 rounded-full'
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <span className='sr-only'>Increase</span>
              </Button>
            </div>
            <PricingSlider />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant='outline' onClick={() => setisDrawerOpen(false)}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

function PricingSlider({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn('w-[100%] my-6', className)}
      {...props}
    />
  );
}
