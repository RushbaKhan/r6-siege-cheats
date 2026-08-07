import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from 'react';

type DeferredSectionProps = {
  children: ReactNode;
  minHeight?: string;
  rootMargin?: string;
};

export function DeferredSection({
  children,
  minHeight = '160px',
  rootMargin = '240px 0px',
}: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? children : null}
    </div>
  );
}

export function lazySection<T extends Record<string, unknown>, K extends keyof T>(
  loader: () => Promise<T>,
  exportName: K
) {
  return lazy(() => loader().then(module => ({ default: module[exportName] as T[K] })));
}

export function LazySection({
  component: Component,
  fallbackMinHeight = '160px',
}: {
  component: React.ComponentType;
  fallbackMinHeight?: string;
}) {
  return (
    <DeferredSection minHeight={fallbackMinHeight}>
      <Suspense fallback={<div style={{ minHeight: fallbackMinHeight }} aria-hidden />}>
        <Component />
      </Suspense>
    </DeferredSection>
  );
}
