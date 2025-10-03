import React, { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

export const TextGenerateEffect = ({ 
  words, 
  className = "", 
  filter = true, 
  duration = 0.5, 
  delay = 0 
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.15),
        }
      );
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [animate, duration, filter, delay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className={className}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return renderWords();
};