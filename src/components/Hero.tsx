'use client';

import { useEffect, useRef, useState } from 'react';
import UniverseBackground from './UniverseBackground';
;

export default function Hero() {
  const [showBG, setShowBG] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // Lazy-mount the animated background when the hero is near/in view
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowBG(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4 sm:px-6"
    >
      {/* Starfield (mounted only after in-view for performance) */}
      {showBG && <UniverseBackground />}

      {/* Animated gradient swirl overlay (from globals.css) */}
      <div className="gradient-bg" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Grid: stacks on mobile, splits at md+ */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          {/* Left: Intro – no box */}
          <div className="text-center md:text-left">
            <h1 className="heading-glow text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Cybersecurity &amp; AI Enthusiast
            </h1>

            <p className="mt-3 max-w-[55ch] text-base text-gray-300 sm:mt-4 sm:text-lg mx-auto md:mx-0">
              I&apos;m a Computer Science graduate focused on building secure and intelligent systems.
            </p>

            {/* CTA buttons: full-width on mobile, inline on tablet/desktop */}
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 md:justify-start">
              <a
                href="#about"
                className="btn-compact inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-wide text-black transition hover:bg-gray-100"
                aria-label="Go to About section"
              >
                About Me ↓
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-compact inline-flex justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-white hover:text-black"
                aria-label="Open Resume PDF"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right: Certifications – readable on mobile/tablet */}
          <div id="certifications" className="w-full">
            <h2 className="mb-4 text-center text-sm font-semibold tracking-widest text-teal-300 sm:mb-6 sm:text-base md:text-left">
              CERTIFICATIONS
            </h2>

            <div className="flex flex-col gap-4 sm:gap-5">
              {/* CCNP Card */}
              <article className="rounded-2xl border border-white/10 bg-white/5/50 p-4 backdrop-blur-md sm:p-5">
                <h3 className="text-base font-semibold sm:text-lg">
                  Cisco Certified Network Professional
                  <span className="block text-white/70 sm:ml-2 sm:inline">— CCNP Enterprise</span>
                </h3>
                <p className="mt-1 text-xs text-gray-300/90 sm:text-sm">
                  Exam Passed: <strong>May 2025</strong>
                </p>

                <a
                  href="https://cp.certmetrics.com/cisco/en/public/verify/credential/43e88ea0d459441bb436ae80245456cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:w-auto sm:text-sm"
                  aria-label="Verify CCNP Enterprise credential"
                >
                  Verify Credential
                </a>
              </article>

              {/* CISA Card */}
              <article className="rounded-2xl border border-white/10 bg-white/5/50 p-4 backdrop-blur-md sm:p-5">
                <h3 className="text-base font-semibold sm:text-lg">
                  Certified Information Systems Auditor
                  <span className="block text-white/70 sm:ml-2 sm:inline">— CISA</span>
                </h3>
                <p className="mt-1 text-xs text-gray-300/90 sm:text-sm">
                  Exam Passed: <strong>July 2025</strong>
                  <span className="ml-2 align-middle rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/80 sm:text-xs">
                    Certificate pending
                  </span>
                </p>

                <a
                  href="#certifications-anchor"
                  className="mt-3 inline-flex w-full justify-center rounded-full border border-white/50 px-4 py-2 text-xs font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:w-auto sm:text-sm"
                  title="Link pending — this will point to the verification page once available"
                >
                  Link Pending
                </a>
                {/* Invisible anchor target for smooth scroll / focus */}
                <span id="certifications-anchor" className="sr-only" aria-hidden="true" />
              </article>
            </div>
          </div>
        </div>

        {/* Bottom spacing on mobile so content doesn’t hug edges */}
        <div className="h-10 sm:h-12 md:h-0" />
      </div>
    </section>
  );
}
