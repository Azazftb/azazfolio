'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import UniverseBackground from './UniverseBackground'; // now supports variant="calm"

export default function Contact() {
  const email = 'Azazbcs03@gmail.com';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-black px-6 py-24 text-white scroll-mt-24 md:scroll-mt-28"
    >
      {/* Calmer starfield with top/bottom fade for a natural blend into neighbors */}
      <UniverseBackground variant="calm" />

      <div
        className="
          relative z-10 mx-auto w-full max-w-[90rem]
          rounded-[2rem] sm:rounded-[3rem]
          px-10 py-16 sm:px-20 sm:py-36 text-center
          shadow-2xl border border-white/10
          animate-gradient-smooth bg-[length:300%_300%]
          bg-gradient-to-r from-[#0f172a]/90 via-[#2d4c7c]/90 to-[#161f35]/90
          backdrop-blur-sm
        "
      >
        <h2 id="contact-heading" className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-10">
          Open to roles in AI or cybersecurity. Let’s{' '}
          <span className="underline underline-offset-4 decoration-white/70">connect</span>...
        </h2>

        {/* Icon Button Grid */}
        <div className="mt-6 sm:mt-12 flex flex-wrap items-center justify-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Azazftb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111827] border border-[#1f2937] text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#1e40af]/30 active:animate-press sm:h-16 sm:w-16"
            aria-label="Visit my GitHub profile"
          >
            <Github className="h-6 w-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/azaz-cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111827] border border-[#1f2937] text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#1e40af]/30 active:animate-press sm:h-16 sm:w-16"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111827] border border-[#1f2937] text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#1e40af]/30 active:animate-press sm:h-16 sm:w-16"
            aria-label={`Email ${email}`}
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Fallback Email */}
        <p className="mt-10 text-sm text-white/80">
          Prefer direct contact?{' '}
          <a
            href={`mailto:${email}`}
            className="font-semibold underline text-white decoration-white/60 underline-offset-4 hover:decoration-teal-300"
          >
            {email}
          </a>
        </p>
      </div>
    </section>
  );
}
