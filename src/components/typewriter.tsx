import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface typewriterProps {}

const Typewriter: FC<typewriterProps> = () => {
  function TypewriterText({ text }: { text: string }) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }, [text, currentIndex]);

    return <span>{displayText}</span>;
  }
  return (
    <div className='absolute inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-10'>
      <p className='text-gray-400 text-9xl font-bold transition-all ease-linear duration-75'>
        <TypewriterText text='Coming Soon' />
      </p>
    </div>
  );
};

export default Typewriter;
