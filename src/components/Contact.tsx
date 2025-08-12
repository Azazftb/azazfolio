'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import UniverseBackground from './UniverseBackground'; // variant="calm"

export default function Contact() {
  const email = 'Azazbcs03@gmail.com';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative overflow-hidden bg-black text-white
        px-4 sm:px-6 lg:px-8
        py-16 sm:py-20 lg:py-28
        scroll-mt-16 sm:scroll-mt-20
      "
    >
      <UniverseBackground variant="calm" />

      <div
        className="
          relative z-10 mx-auto w-full
          max-w-6xl
          rounded-2xl sm:rounded-[2rem]
          border border-white/10 backdrop-blur-sm
          shadow-2xl
          bg-gradient-to-r from-[#000000]/90 via-[#00223E]/85 to-[#0B486B]/90
          px-5 py-10
          sm:px-10 sm:py-14
          lg:px-16 lg:py-20
          animate-gradient-smooth bg-[length:260%_260%]
          motion-reduce:animate-none
        "
      >
        <h2
          id="contact-heading"
          className="
            font-bold tracking-tight text-left leading-tight
            mb-6 sm:mb-10
            text-[clamp(1.5rem,4vw,3rem)]  /* 24px → ~48px fluid */
          "
        >
          Open to roles in AI &amp; Cybersecurity. let’s{' '}
          <span className="underline underline-offset-4 decoration-white/70">
            connect
          </span>
          .
        </h2>

        {/* Actions */}
        <div
          className="
            mt-8 sm:mt-10 lg:mt-12
            grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6
          "
        >
          {/* GitHub */}
          <a
            href="https://github.com/Azazftb"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex h-12 sm:h-14 items-center justify-center gap-2
              rounded-xl border border-white/10
              bg-[#111827]/80
              px-4 font-semibold
              shadow-md transition-all duration-200
              hover:scale-[1.02] hover:bg-[#1e3a8a]/30
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
              active:animate-press
            "
            aria-label="Visit my GitHub profile"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-[clamp(0.95rem,1.6vw,1.05rem)]">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/azaz-cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex h-12 sm:h-14 items-center justify-center gap-2
              rounded-xl border border-white/10
              bg-[#111827]/80
              px-4 font-semibold
              shadow-md transition-all duration-200
              hover:scale-[1.02] hover:bg-[#1e3a8a]/30
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
              active:animate-press
            "
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-[clamp(0.95rem,1.6vw,1.05rem)]">LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="
              group flex h-12 sm:h-14 items-center justify-center gap-2
              rounded-xl border border-white/10
              bg-[#111827]/80
              px-4 font-semibold
              shadow-md transition-all duration-200
              hover:scale-[1.02] hover:bg-[#1e3a8a]/30
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
              active:animate-press
            "
            aria-label={`Email ${email}`}
          >
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-[clamp(0.95rem,1.6vw,1.05rem)]">Email me</span>
          </a>
        </div>

        {/* Fallback email */}
        <p
          className="
            mt-8 sm:mt-10 text-center text-white/80
            text-[clamp(0.9rem,1.5vw,1rem)]  /* ~14.4px → 16px fluid */
          "
        >
          Prefer direct contact?{' '}
          <a
            href={`mailto:${email}`}
            className="font-semibold underline decoration-white/60 underline-offset-4 hover:decoration-teal-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
          >
            {email}
          </a>
        </p>
      </div>
    </section>
  );
}
