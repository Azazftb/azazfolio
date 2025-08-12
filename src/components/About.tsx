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

// easing presets
const EASE_OUT: Transition['ease'] = [0.16, 1, 0.3, 1];
const LINEAR: Transition['ease'] = [0, 0, 1, 1];

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
      aria-labelledby="about-heading"
      className="
        bg-black text-white
        px-4 sm:px-6 lg:px-8
        py-16 sm:py-20 lg:py-28
        scroll-mt-16 sm:scroll-mt-20
      "
    >
      <div
        className="
          mx-auto max-w-6xl
          flex flex-col items-center
          gap-10 sm:gap-14 lg:flex-row lg:items-start lg:gap-24
        "
      >
        {/* Image (reveal) */}
        <motion.div
          ref={imgRef}
          variants={imgVariants}
          initial="hidden"
          animate={imgInView ? 'show' : 'hidden'}
          className="
            relative flex-shrink-0
            h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80
            overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-xl
          "
        >
          <Image
            src="/images/profile1.jpeg"
            alt="Portrait of Azaz — cybersecurity-focused developer and AI enthusiast"
            width={640}
            height={640}
            sizes="
              (max-width: 480px) 224px,
              (max-width: 768px) 288px,
              (max-width: 1024px) 320px,
              320px
            "
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/profile1-blur.jpeg"
            className="h-full w-full rounded-[2rem] object-cover grayscale transition duration-500 hover:grayscale-0"
          />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-teal-500/15 blur-2xl" />
        </motion.div>

        {/* Text */}
        <div className="max-w-xl text-center lg:text-left">
          <h2
            id="about-heading"
            className="
              font-bold leading-tight
              text-[clamp(1.5rem,4.5vw,2.5rem)]  /* 24 → 40px */
            "
          >
I’m Azaz,{' '}
  <span className="font-extrabold text-white/90">
    passionate about cybersecurity
  </span>{' '}
  and{' '}
  <span className="font-extrabold text-white/90">artificial intelligence</span>{' '}
  based in Waterloo
</h2>

<p
  className="
    mt-4 text-gray-300 leading-relaxed
    text-[clamp(0.95rem,1.6vw,1.125rem)]  /* ~15 → 18px */
  "
>
  I’m a <span className="font-semibold text-white">Wilfrid Laurier University</span> graduate with a{' '}
  <span className="font-semibold text-white">Bachelor’s in Computer Science</span>. 
  Now expanding my expertise through a master’s in{' '}
  <span className="font-semibold text-white">Artificial Intelligence</span>.
</p>
          {/* CTA with spinning stars ) */}
          <motion.a
            href="#contact"
            className="
              mt-6 inline-flex items-center
              rounded-full border border-white/60
              px-5 py-2.5 sm:px-6 sm:py-3
              font-semibold
              text-[clamp(0.95rem,1.6vw,1.05rem)]
              transition hover:border-white hover:bg-white/10
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
            "
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
      <div className="mx-auto mt-12 sm:mt-14 max-w-6xl">
        <div className="mx-auto h-px w-24 bg-teal-400/60" />
      </div>

      {/* Specialties */}
      <motion.div
        ref={gridRef}
        variants={gridContainer}
        initial="hidden"
        animate={gridInView ? 'show' : 'hidden'}
        className="mx-auto mt-12 sm:mt-16 max-w-6xl"
      >
        <h3
          className="
            mb-8 sm:mb-10 text-center font-bold
            text-[clamp(1.25rem,2.5vw,1.75rem)]  /* 20 → 28px */
          "
        >
          Specialties
        </h3>

        <div
          className="
            grid grid-cols-1 gap-4 sm:gap-5
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          "
        >
          {SPECIALTIES.map(({ icon: Icon, title }) => (
            <motion.article
              key={title}
              variants={gridItem}
              whileHover="hover"
              className="
                group rounded-xl border border-white/10
                bg-white/[0.04] p-4 sm:p-5
                transition hover:border-white/20 hover:bg-white/[0.07]
                focus-within:border-white/20 will-change-transform
              "
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="will-change-transform"
                  whileHover={
                    reduce ? undefined : { y: -2, transition: { duration: 0.18, ease: EASE_OUT } }
                  }
                >
                  <Icon
                    className="text-teal-300 transition group-hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.35)]"
                    size={36}
                  />
                </motion.div>

                <span
                  className="
                    mt-3 font-semibold text-white
                    text-[clamp(0.95rem,1.6vw,1.05rem)]
                  "
                >
                  {title}
                </span>
                <span className="mt-2 block h-[2px] w-8 bg-teal-400/70 opacity-70 transition-opacity group-hover:opacity-100" />

                <a
                  href="#projects"
                  className="
                    sr-only focus:not-sr-only
                    mt-3 inline-flex rounded-full border border-white/40
                    px-3 py-1 text-xs font-medium text-white/90
                    transition hover:border-white hover:bg-white/10
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                  "
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
