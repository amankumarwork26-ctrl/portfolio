import { useEffect } from 'react';

export default function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursorTrail');
    if (!cursor || !trail) return;

    let mx = 0, my = 0, tx = 0, ty = 0, animId;

    function onMouseMove(e) {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    }

    function animateTrail() {
      tx += (mx - tx) * 0.12;
      ty += (my - ty) * 0.12;
      trail.style.left = tx + 'px';
      trail.style.top = ty + 'px';
      animId = requestAnimationFrame(animateTrail);
    }

    document.addEventListener('mousemove', onMouseMove);
    animateTrail();

    const interactiveEls = document.querySelectorAll('a, button, .skill-category, .project-card, .cert-card, .contact-link');

    function onEnter() {
      cursor.style.transform = 'translate(-50%,-50%) scale(3.5)';
      trail.style.transform = 'translate(-50%,-50%) scale(0.2)';
      trail.style.borderColor = 'transparent';
    }

    function onLeave() {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      trail.style.transform = 'translate(-50%,-50%) scale(1)';
      trail.style.borderColor = 'rgba(139,92,246,0.5)';
    }

    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', onMouseMove);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);
}
