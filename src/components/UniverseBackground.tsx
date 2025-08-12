'use client';

import { useEffect, useRef } from 'react';

type Star = { x: number; y: number; vx: number; size: number; alpha: number };

type Props = {
  /** default = lively (Hero), calm = fewer slower stars + edge fade in contacts */
  variant?: 'default' | 'calm';
};

export default function UniverseBackground({ variant = 'default' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });
  const cfgRef = useRef({
    edgeFadeFrac: 0,            
    baseAlphaMin: 0.5,
    baseAlphaMax: 1.0,
    speedMin: 0.04,             
    speedMax: 0.70,
    mobile: 250,
    tablet: 600,
    desktop: 1000,
    glowThreshold: 1.4,         
  });

  useEffect(() => {
    //  a
    cfgRef.current = (
      variant === 'calm'
        ? {
            edgeFadeFrac: 0.22,
            baseAlphaMin: 0.35,
            baseAlphaMax: 0.65,
            speedMin: 0.02,
            speedMax: 0.12,
            mobile: 160,
            tablet: 380,
            desktop: 620,
            glowThreshold: 1.5,
          }
        : {
            edgeFadeFrac: 0,
            baseAlphaMin: 0.5,
            baseAlphaMax: 1.0,
            speedMin: 0.04,
            speedMax: 0.70,
            mobile: 250,
            tablet: 600,
            desktop: 1000,
            glowThreshold: 1.4,
          }
    );
  }, [variant]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Measure the PARENT (section) so absolute canvas always matches it
    const measureTarget = (canvas.parentElement as HTMLElement) ?? canvas;

    const setup = () => {
      const rect = measureTarget.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { w, h, dpr };

      const { mobile, tablet, desktop, speedMin, speedMax, baseAlphaMin, baseAlphaMax } = cfgRef.current;

      const count = w < 640 ? mobile : w < 1024 ? tablet : desktop;
      starsRef.current = createStars(count, w, h, { speedMin, speedMax, baseAlphaMin, baseAlphaMax });
    };

    const createStars = (
      count: number,
      w: number,
      h: number,
      cfg: { speedMin: number; speedMax: number; baseAlphaMin: number; baseAlphaMax: number }
    ): Star[] => {
      const arr: Star[] = [];
      for (let i = 0; i < count; i++) {
        const y = Math.random() * h;
        const speed = cfg.speedMin + Math.random() * (cfg.speedMax - cfg.speedMin);
        const size = Math.random() < 0.85 ? 1 : 1.6;
        const alpha = cfg.baseAlphaMin + Math.random() * (cfg.baseAlphaMax - cfg.baseAlphaMin);
        const x = Math.random() * w;
        arr.push({ x, y, vx: -speed, size, alpha });
      }
      return arr;
    };

    const step = () => {
      const { w, h } = sizeRef.current;
      const { edgeFadeFrac, glowThreshold } = cfgRef.current;
      const stars = starsRef.current;

      ctx.clearRect(0, 0, w, h);

      const fadeH = edgeFadeFrac > 0 ? Math.max(1, Math.floor(h * edgeFadeFrac)) : 0;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;

        if (s.x < -8) {
          s.x = w + Math.random() * 40;
          s.y = Math.random() * h;
        }

        // edge fade (top/bottom), 1.0 in center
        let fade = 1;
        if (fadeH > 0) {
          if (s.y < fadeH) fade = s.y / fadeH;
          else if (s.y > h - fadeH) fade = (h - s.y) / fadeH;
        }
        const alpha = Math.max(0, Math.min(1, s.alpha * fade));

        if (alpha <= 0.01) continue;

        ctx.globalAlpha = alpha;
        if (s.size > glowThreshold) {
          ctx.shadowColor = 'rgba(255,255,255,0.6)';
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fillStyle = '#fff';
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(step);
    };

    // Observe the parent (section) for size changes
    const ro = new ResizeObserver(() => setup());
    ro.observe(measureTarget);

    // First setup AFTER layout is settled
    const init = () => {
      setup();
      rafRef.current = requestAnimationFrame(step);
    };
    const initId = requestAnimationFrame(init);

    // Pause raf when hidden
    const onVis = () => {
      if (document.visibilityState === 'hidden') {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(initId);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
