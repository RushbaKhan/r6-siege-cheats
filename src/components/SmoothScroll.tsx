import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../lib/lenis';

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.08,
      touchMultiplier: 1.15,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    setLenis(lenis);
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
