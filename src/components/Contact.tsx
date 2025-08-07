'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black text-white"
    >
      <div
        className="w-full max-w-[90rem] mx-auto rounded-[2rem] sm:rounded-[3rem] px-10 py-16 sm:px-20 sm:py-36 text-center shadow-2xl border border-white/10
        animate-gradient-smooth bg-[length:300%_300%]
        bg-gradient-to-r from-[#0f172a] via-[#2d4c7c] to-[#161f35]"
      >
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-10">
          Open to roles in AI or cybersecurity. Let’s <span className="underline underline-offset-4 decoration-white/70">connect</span>...
        </h2>

        {/* Icon Button Grid */}
        <div className="mt-6 sm:mt-12 flex flex-wrap justify-center items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Azazftb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111827] border border-[#1f2937] text-white p-4 rounded-2xl shadow-md hover:scale-105 active:animate-press transition-all duration-200 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 hover:bg-[#1e40af]/30"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/azaz-cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111827] border border-[#1f2937] text-white p-4 rounded-2xl shadow-md hover:scale-105 active:animate-press transition-all duration-200 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 hover:bg-[#1e40af]/30"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:Azazbcs03@gmail.com"
            className="bg-[#111827] border border-[#1f2937] text-white p-4 rounded-2xl shadow-md hover:scale-105 active:animate-press transition-all duration-200 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 hover:bg-[#1e40af]/30"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Fallback Email */}
        <p className="mt-10 text-sm text-white/80">
          Prefer direct contact? Reach me at{' '}
          <a
            href="mailto:Azazbcs03@gmail.com"
            className="underline font-semibold text-white"
          >
            Azazbcs03@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
