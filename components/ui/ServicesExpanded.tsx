'use client';

import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@nextui-org/button';
import ModalContent from '../ModalDescription';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

interface ServicesExpandedProps {
  Modaltitle: string | undefined;
  ModalDescription: string | undefined;
  id: number | undefined;
  isOpen: boolean;
  onClose: () => void;
}

const ServicesExpanded: React.FC<ServicesExpandedProps> = ({
  Modaltitle,
  ModalDescription,
  id,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-7xl max-h-[80vh] scrollbar-hide'>
        <DialogHeader className='mt-5'>
          <DialogTitle className='font-bold text-3xl text-center lg:text-4xl xl:text-5xl'>
            {Modaltitle}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='text-center'>
          {ModalDescription}
        </DialogDescription>
        <ModalContent id={id} />
        <DialogFooter>
          <div className='flex flex-col sm:flex-row gap-4 sm:justify-end '>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    color='secondary'
                    variant='shadow'
                    radius='lg'
                    className='w-full'
                    onClick={() =>
                      window.open('https://www.google.com/maps', '_blank')
                    }
                  >
                    Visit us 🏢
                  </Button>{' '}
                </TooltipTrigger>
                <TooltipContent>
                  Office Timing : 10:00 AM - 08:00 PM
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {' '}
                  <Button
                    color='secondary'
                    variant='shadow'
                    radius='lg'
                    className='w-full'
                    onClick={() => window.open('tel:+917972418920', '_blank')}
                  >
                    Call us 📞
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className='text-center text-green-400'>
                    95% Response Rate ✅
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {' '}
                  <Button
                    color='secondary'
                    variant='shadow'
                    radius='lg'
                    className='w-full'
                    onClick={() =>
                      window.open('https://wa.me/+919822377366', '_blank')
                    }
                  >
                    Whatsapp 📩
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>+919822377366</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {' '}
                  <Button
                    color='secondary'
                    variant='shadow'
                    radius='lg'
                    className='w-full'
                    onClick={() =>
                      window.open('mailto:sba.nashik@gmail.com', '_blank')
                    }
                  >
                    Email 📧
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>sba.nashik@gmail.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DialogClose asChild>
              <Button radius='lg' size='md' variant='ghost'>
                Close
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServicesExpanded;
