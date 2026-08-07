import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const start = () => {
      if (cancelled) return;

      void import('lenis').then(({ default: Lenis }) => {
        if (cancelled) return;

        const lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.2,
        });

        let frame = 0;
        const raf = (time: number) => {
          lenis.raf(time);
          frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);

        cleanup = () => {
          cancelAnimationFrame(frame);
          lenis.destroy();
        };
      });
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(start, { timeout: 2000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
        cleanup?.();
      };
    }

    const timeoutId = window.setTimeout(start, 1200);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      cleanup?.();
    };
  }, []);

  return null;
}
