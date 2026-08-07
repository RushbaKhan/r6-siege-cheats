import { useRef, useEffect, useState } from 'react';

type VideoEmbedProps = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  ariaLabel?: string;
};

export function VideoEmbed({ src, className, style, priority = false, ariaLabel }: VideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState<string | null>(priority ? src : null);

  useEffect(() => {
    if (priority || activeSrc) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [priority, activeSrc, src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [activeSrc]);

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative', ...style }}>
      {activeSrc ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-label={ariaLabel}
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
        >
          <source src={activeSrc} type="video/mp4" />
        </video>
      ) : (
        <div
          aria-hidden
          style={{
            width: '100%',
            height: '100%',
            minHeight: '180px',
            background: 'linear-gradient(135deg, var(--bg-void) 0%, var(--bg-surface) 100%)',
          }}
        />
      )}
    </div>
  );
}
