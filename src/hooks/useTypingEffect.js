import { useEffect, useRef } from 'react';

export default function useTypingEffect(phrases, { typingSpeed = 75, deletingSpeed = 35, pauseTime = 2000, initialDelay = 800 } = {}) {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let phraseIdx = 0, charIdx = 0, deleting = false, timer;

    function type() {
      const current = phrases[phraseIdx];

      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(type, pauseTime);
          return;
        }
        timer = setTimeout(type, typingSpeed);
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timer = setTimeout(type, 350);
          return;
        }
        timer = setTimeout(type, deletingSpeed);
      }
    }

    timer = setTimeout(type, initialDelay);
    return () => clearTimeout(timer);
  }, [phrases, typingSpeed, deletingSpeed, pauseTime, initialDelay]);

  return textRef;
}
