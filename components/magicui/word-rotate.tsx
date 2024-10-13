'use client';

import { useEffect, useState } from 'react';

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 2000, // Speed up switching time
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <h1 className='word-rotate-text'>{words[index]}</h1>
    </div>
  );
}
