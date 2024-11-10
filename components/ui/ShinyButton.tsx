// @ts-nocheck
'use client';
import { motion } from 'framer-motion';
import { TransitionLink } from '../utils/TransitionLink';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  otherclassNames?: string;
}

const ShinyButton = ({ Props }: Props) => {
  const router = useRouter();
  return (
    <motion.button
      initial={{ '--x': '100%', scale: 1 }}
      animate={{ '--x': '-100%' }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: 'spring',
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className={`px-8 py-2 sm:px-10 sm:py-3 mt-4 rounded-md relative radial-gradient sm:mt-5 z-10  hidden md:block ${Props && Props.otherclassNames}`}
      onClick={() => {
        router.push('/contact');
      }}
    >
      Let's Talk
      <span className='block absolute inset-0 rounded-md p-px linear-overlay' />
    </motion.button>
  );
};

export default ShinyButton;
