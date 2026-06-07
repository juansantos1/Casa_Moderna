import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = (value) =>
  typeof value === 'number' ? `${value}px` : value ?? undefined;

const cx = (...parts) => parts.filter(Boolean).join(' ');

/* ── Hooks ─────────────────────────────────────────────── */

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();
    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, ...dependencies]);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remaining = images.length;
    const handleLoad = () => {
      remaining -= 1;
      if (remaining === 0) onLoad();
    };

    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleLoad);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onLoad, seqRef, ...dependencies]);
};

const useAnimationLoop = (
  trackRef,
  targetVelocity,
  seqWidth,
  seqHeight,
  isHovered,
  hoverSpeed,
  isVertical
) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      track.style.transform = isVertical
        ? `translate3d(0, ${-offsetRef.current}px, 0)`
        : `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return () => { lastTimestampRef.current = null; };
    }

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;

      const delta = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target =
        isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const ease = 1 - Math.exp(-delta / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * ease;

      if (seqSize > 0) {
        let next = offsetRef.current + velocityRef.current * delta;
        next = ((next % seqSize) + seqSize) % seqSize;
        offsetRef.current = next;

        track.style.transform = isVertical
          ? `translate3d(0, ${-next}px, 0)`
          : `translate3d(${-next}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical, trackRef]);
};

/* ── Component ─────────────────────────────────────────── */

export const LogoLoop = memo(
  ({
    logos,
    speed = 80,
    direction = 'left',
    width = '100%',
    logoHeight = 40,
    gap = 64,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Corporate partner logos',
    className,
    style,
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [seqHeight, setSeqHeight] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === 'up' || direction === 'down';

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const dirMult = isVertical
        ? direction === 'up' ? 1 : -1
        : direction === 'left' ? 1 : -1;
      return magnitude * dirMult * (speed < 0 ? -1 : 1);
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const rect = seqRef.current?.getBoundingClientRect?.();
      const sw = rect?.width ?? 0;
      const sh = rect?.height ?? 0;

      if (isVertical) {
        const parentHeight =
          containerRef.current?.parentElement?.clientHeight ?? 0;
        if (containerRef.current && parentHeight > 0) {
          containerRef.current.style.height = `${Math.ceil(parentHeight)}px`;
        }
        if (sh > 0) {
          setSeqHeight(Math.ceil(sh));
          const viewport =
            containerRef.current?.clientHeight ?? parentHeight ?? sh;
          setCopyCount(
            Math.max(
              ANIMATION_CONFIG.MIN_COPIES,
              Math.ceil(viewport / sh) + ANIMATION_CONFIG.COPY_HEADROOM
            )
          );
        }
      } else if (sw > 0) {
        setSeqWidth(Math.ceil(sw));
        setCopyCount(
          Math.max(
            ANIMATION_CONFIG.MIN_COPIES,
            Math.ceil(containerWidth / sw) + ANIMATION_CONFIG.COPY_HEADROOM
          )
        );
      }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [
      logos,
      gap,
      logoHeight,
      isVertical,
    ]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);
    useAnimationLoop(
      trackRef,
      targetVelocity,
      seqWidth,
      seqHeight,
      isHovered,
      effectiveHoverSpeed,
      isVertical
    );

    const cssVars = useMemo(
      () => ({
        '--ll-gap': `${gap}px`,
        '--ll-height': `${logoHeight}px`,
        ...(fadeOutColor && { '--ll-fade': fadeOutColor }),
      }),
      [gap, logoHeight, fadeOutColor]
    );

    const handleMouseEnter = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [effectiveHoverSpeed]);

    const handleMouseLeave = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [effectiveHoverSpeed]);

    const renderLogoItem = useCallback(
      (item, key) => {
        if (renderItem) {
          return (
            <li key={key} role="listitem" style={{ marginRight: 'var(--ll-gap)', flexShrink: 0 }}>
              {renderItem(item, key)}
            </li>
          );
        }

        const isNode = 'node' in item;

        const imgStyle = {
          height: 'var(--ll-height)',
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
          userSelect: 'none',
          WebkitUserDrag: 'none',
          pointerEvents: 'none',
          transition: scaleOnHover ? 'transform 300ms cubic-bezier(0.4,0,0.2,1)' : undefined,
          filter: 'grayscale(100%)',
          opacity: 0.7,
        };

        const content = isNode ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 'var(--ll-height)' }}>
            {item.node}
          </span>
        ) : (
          <img
            src={item.src}
            alt={item.alt ?? ''}
            title={item.title}
            loading="lazy"
            decoding="async"
            draggable={false}
            style={imgStyle}
            className="logoloop-img"
          />
        );

        const inner = item.href ? (
          <a
            href={item.href}
            aria-label={item.alt ?? item.title ?? 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            key={key}
            role="listitem"
            className={scaleOnHover ? 'logoloop-item' : undefined}
            style={{ marginRight: 'var(--ll-gap)', flexShrink: 0, display: 'flex', alignItems: 'center' }}
          >
            {inner}
          </li>
        );
      },
      [scaleOnHover, renderItem]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, i) => (
          <ul
            key={`copy-${i}`}
            ref={i === 0 ? seqRef : undefined}
            role="list"
            aria-hidden={i > 0}
            style={{ display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}
          >
            {logos.map((item, j) => renderLogoItem(item, `${i}-${j}`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

    const containerStyle = useMemo(
      () => ({
        position: 'relative',
        overflow: 'hidden',
        width: toCssLength(width) ?? '100%',
        ...cssVars,
        ...style,
      }),
      [width, cssVars, style]
    );

    return (
      <div
        ref={containerRef}
        role="region"
        aria-label={ariaLabel}
        className={cx('logoloop-root', className)}
        style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Fade overlays */}
        {fadeOut && !isVertical && (
          <>
            <div
              aria-hidden
              style={{
                position: 'absolute', inset: '0 auto 0 0', zIndex: 10, width: 'clamp(24px, 8%, 120px)',
                background: `linear-gradient(to right, ${fadeOutColor ?? '#f0f4f8'} 0%, transparent 100%)`,
                pointerEvents: 'none',
              }}
            />
            <div
              aria-hidden
              style={{
                position: 'absolute', inset: '0 0 0 auto', zIndex: 10, width: 'clamp(24px, 8%, 120px)',
                background: `linear-gradient(to left, ${fadeOutColor ?? '#f0f4f8'} 0%, transparent 100%)`,
                pointerEvents: 'none',
              }}
            />
          </>
        )}

        {/* Track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 'max-content',
            willChange: 'transform',
            userSelect: 'none',
            position: 'relative',
            zIndex: 0,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
