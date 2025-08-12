'use client';

import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import type { Variants, Transition } from 'framer-motion';
import { useMemo, useRef } from 'react';
import {
  ShieldCheck,
  Bot,
  Code2,
  Network,
  Server,
  Activity,
  CloudCog,
  Globe,
} from 'lucide-react';

const SPECIALTIES = [
  { icon: Bot, title: 'AI Automation' },
  { icon: ShieldCheck, title: 'Cybersecurity' },
  { icon: Code2, title: 'Secure Web Dev' },
  { icon: Network, title: 'Network Design' },
  { icon: Server, title: 'System Optimization' },
  { icon: Activity, title: 'Pen Testing' },
  { icon: CloudCog, title: 'Cloud & DevOps' },
  { icon: Globe, title: 'Freelance Solutions' },
];

//  easing presets 
const EASE_OUT: Transition['ease'] = [0.16, 1, 0.3, 1]; // easeOut
const LINEAR: Transition['ease'] = [0, 0, 1, 1];        // linear

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  // in-view triggers 
  const imgRef = useRef<HTMLDivElement | null>(null);
  const imgInView = useInView(imgRef, { once: true, amount: 0.35 });
  const gridRef = useRef<HTMLDivElement | null>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.35 });

  // Variants 
  const imgVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, x: reduce ? 0 : -40 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: EASE_OUT },
      },
    }),
    [reduce]
  );

  const gridContainer: Variants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: reduce ? 0 : 0.06,
          delayChildren: 0.05,
        },
      },
    }),
    [reduce]
  );

  const gridItem: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : 12, scale: 0.985 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.38, ease: EASE_OUT },
      },
      hover: reduce
        ? {}
        : {
            y: -2,
            scale: 1.01,
            transition: { duration: 0.18, ease: EASE_OUT },
          },
    }),
    [reduce]
  );

  // Spinning star 
  const starSpin: Variants = useMemo(
    () => ({
      ambient: reduce
        ? {}
        : {
            rotate: [0, 360],
            transition: { duration: 8, ease: LINEAR, repeat: Infinity },
          },
      hover: reduce
        ? {}
        : {
            rotate: [0, 360],
            transition: { duration: 1, ease: LINEAR, repeat: Infinity },
          },
    }),
    [reduce]
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-24 px-6 scroll-mt-24 md:scroll-mt-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:gap-32">
        {/* Image  reveal) */}
        <motion.div
          ref={imgRef}
          variants={imgVariants}
          initial="hidden"
          animate={imgInView ? 'show' : 'hidden'}
          className="relative h-64 w-64 overflow-hidden rounded-[2rem] shadow-xl sm:h-80 sm:w-80 flex-shrink-0 ring-1 ring-white/10"
        >
          <Image
            src="/images/profile1.jpeg"
            alt="Portrait of Azaz — cybersecurity-focused developer and AI enthusiast"
            width={640}
            height={640}
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 320px"
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/profile1-blur.jpeg"
            className="h-full w-full rounded-[2rem] object-cover grayscale transition duration-500 hover:grayscale-0"
          />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-teal-500/15 blur-2xl" />
        </motion.div>

        <div className="max-w-xl text-center lg:text-left">
          <h2 id="about-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
            I’m Azaz, <span className="font-extrabold text-white/90">cybersecurity‑focused developer</span> and{' '}
            <span className="font-extrabold text-white/90">AI enthusiast</span> based in Waterloo
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            I build <span className="font-semibold text-white">secure</span>,{' '}
            <span className="font-semibold text-white">intelligent systems</span> with thoughtful{' '}
            <span className="font-semibold text-white">automation</span>. Currently pursuing a master’s in{' '}
            <span className="font-semibold text-white">Artificial Intelligence</span>.
          </p>

          {/* CTA with spinning stars faster on hover */}
          <motion.a
            href="#contact"
            className="mt-6 inline-flex items-center rounded-full border border-white/60 px-6 py-3 font-semibold transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            whileHover={reduce ? undefined : { scale: 1.02 }}
          >
            <motion.span
              className="mr-2 inline-block drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
              variants={starSpin}
              animate={reduce ? undefined : 'ambient'}
              whileHover={reduce ? undefined : 'hover'}
            >
              ✦
            </motion.span>
            Get in touch
            <motion.span
              className="ml-2 inline-block drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
              variants={starSpin}
              animate={reduce ? undefined : 'ambient'}
              whileHover={reduce ? undefined : 'hover'}
            >
              ✦
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-14 max-w-6xl">
        <div className="mx-auto h-px w-24 bg-teal-400/60" />
      </div>

      {/* Specialties  */}
      <motion.div
        ref={gridRef}
        variants={gridContainer}
        initial="hidden"
        animate={gridInView ? 'show' : 'hidden'}
        className="mx-auto mt-16 max-w-6xl"
      >
        <h3 className="mb-10 text-center text-2xl font-bold">Specialties</h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTIES.map(({ icon: Icon, title }) => (
            <motion.article
              key={title}
              variants={gridItem}
              whileHover="hover"
              className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.07] focus-within:border-white/20 will-change-transform"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="will-change-transform"
                  whileHover={reduce ? undefined : { y: -2, transition: { duration: 0.18, ease: EASE_OUT } }}
                >
                  <Icon
                    size={40}
                    className="text-teal-300 transition group-hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.35)]"
                  />
                </motion.div>

                <span className="mt-4 font-semibold text-white">{title}</span>
                <span className="mt-2 block h-[2px] w-8 bg-teal-400/70 opacity-70 transition-opacity group-hover:opacity-100" />

                <a
                  href="#projects"
                  className="sr-only focus:not-sr-only mt-3 inline-flex rounded-full border border-white/40 px-3 py-1 text-xs font-medium text-white/90 transition hover:border-white hover:bg:white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  See projects using {title}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
