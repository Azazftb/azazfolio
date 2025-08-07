'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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


export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, amount: 0.4 });

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        {/* Left - Animated Image */}
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden shadow-xl flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ root: aboutRef, once: true }}
        >
          <Image
            src="/images/profile1.jpeg"
            alt="Profile photo"
            width={320}
            height={320}
            placeholder="blur"
            blurDataURL="/images/profile1-blur.jpeg"
            className="rounded-[2rem] object-cover grayscale hover:grayscale-0 transition duration-500"
          />
        </motion.div>

        {/* Right - Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            I'm a <span className="text-white/90 font-extrabold">cybersecurity-focused developer</span> and{' '}
            <span className="text-white/90 font-extrabold">AI enthusiast</span> based in Waterloo!
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I build <span className="font-semibold text-white">secure</span>,{' '}
            <span className="font-semibold text-white">intelligent systems</span> using{' '}
            <span className="font-semibold text-white">automation</span>. Currently pursuing Masters in {' '}
            <span className="font-semibold text-white">Artificial Intelligence</span>.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition font-semibold"
          >
            <span className={`${isInView ? 'inline-block spin-slow mr-2 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]' : 'inline-block mr-2'}`}>
              ✦
            </span>
            Get in touch
            <span className={`${isInView ? 'inline-block spin-slow ml-2 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]' : 'inline-block ml-2'}`}>
              ✦
            </span>
          </a>
        </div>
      </div>

     {/* Specialties Section with Icons */}
<motion.div
  className="max-w-6xl mx-auto mt-20"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-bold mb-12 text-center">Specialties</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
    {[
      { icon: Bot, title: 'AI Automation' },
      { icon: ShieldCheck, title: 'Cybersecurity' },
      { icon: Code2, title: 'Secure Web Dev' },
      { icon: Network, title: 'Network Design' },
      { icon: Server, title: 'System Optimization' },
      { icon: Activity, title: 'Pen Testing' },
      { icon: CloudCog, title: 'Cloud & DevOps' },
      { icon: Globe, title: 'Freelance Solutions' },
    ].map(({ icon: Icon, title }, index) => (
      <motion.div
        key={title}
        className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Icon size={40} className="text-[#2d4c7c] group-hover:scale-110 transition" />
        <span className="font-semibold text-white mt-4">{title}</span>
        <div className="mt-2 w-8 h-[2px] bg-[#8ed2ff] opacity-60 group-hover:opacity-100 transition-all duration-300" />
      </motion.div>
    ))}
  </div>
</motion.div>

    </section>
  );
}
