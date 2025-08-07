'use client';

import dynamic from 'next/dynamic';
import { ChevronDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';


const FaultyTerminal = dynamic(() => import('./FaultyTerminal'), { ssr: false });

export default function Hero() {
  const [scale, setScale] = useState(2.5);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 640) setScale(1.5);
      else if (width < 1024) setScale(2.2);
      else setScale(3.25);
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-start px-4 sm:px-8">
      
      {/* Animated Background Panel */}
      <div className="relative w-full sm:w-[90%] lg:w-[73%] h-[70vh] sm:h-[80vh] overflow-hidden z-0 rounded-3xl ml-0 sm:ml-32">
        <FaultyTerminal
          scale={scale}
          gridMul={[1.5, 1]}
          digitSize={1.3}
          timeScale={0.9}
          pause={false}
          scanlineIntensity={0.6}
          glitchAmount={0.2}
          flickerAmount={0.7}
          noiseAmp={0.5}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#03346E"
          mouseReact={true}
          mouseStrength={0.4}
          pageLoadAnimation={false}
          brightness={1.2}
        />
      </div>

      {/* Title Text */}
      <div className="absolute bottom-6 sm:bottom-10 lg:bottom-20 left-4 sm:left-10 lg:left-40 bg-black px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-tr-2xl rounded-bl-2xl max-w-[90%] sm:max-w-md lg:max-w-lg z-10 shadow-none">
        <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold leading-snug sm:leading-tight">
          Recent graduate interested in Cyber Security and Artificial Intelligence.
        </h1>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#about"
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-gray-300 transition"
      >
        <ChevronDown size={28} className="sm:size-12" />
      </a>
{/* Sidebar: Resume + Certifications */}
<div className="absolute right-4 sm:right-20 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-end gap-24">

  {/* Resume Bubble */}
  <div className="w-64 h-64 bg-gradient-to-br from-[#444b6b] via-[#122768] to-[#48b181] text-white rounded-full shadow-xl flex flex-col justify-center items-center text-center p-6 border-[2px] border-gray-700 animate-gradient-slow bg-[length:200%_200%] bg-[position:0%_0%]">
    <h2 className="text-2xl sm:text-4xl lg:text-3xl font-semibold leading-snug sm:leading-tight mb-4">
      My Resume
    </h2>
    <div className="flex flex-col gap-2">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-1.5 bg-white text-black text-sm rounded-full hover:bg-gray-200 transition"
      >
        Preview
      </a>
      <a
        href="/resume.pdf"
        download
        className="px-4 py-1.5 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-700 transition"
      >
        Download
      </a>
    </div>
  </div>

  {/* Certifications Panel in a Dark Glassy Box with Fade Bottom */}
  <div className="relative w-72 bg-[#0b0b0b]/80 rounded-xl text-white p-6 shadow-xl backdrop-blur-md overflow-hidden">

    {/* Fade Out Overlay */}
    <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-[#0b0b0b] pointer-events-none z-10" />

    {/* Certifications Title */}
    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1">Certified</h2>
    <div className="w-40 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4" />

    <div className="space-y-4 z-20 relative">
      {/* CCNP */}
      <div className="bg-[#0b0b0b] rounded-xl p-4 shadow-md border-t border-l border-r border-white/10">
        <p className="text-[10px] text-gray-400 tracking-widest mb-1">CISCO CERTIFICATION</p>
        <h3 className="text-base font-bold mb-1 leading-snug">CCNP Enterprise</h3>
        <p className="text-xs text-gray-400 mb-2">Passed: May 2025</p>
        <a
          href="https://cp.certmetrics.com/cisco/en/public/verify/credential/43e88ea0d459441bb436ae80245456cb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1 text-xs bg-white text-black rounded-md hover:bg-gray-200 transition"
        >
          View Credential
        </a>
      </div>

      {/* CISA */}
      <div className="bg-[#0b0b0b] rounded-xl p-4 shadow-md border-t border-l border-r border-white/10">
        <p className="text-[10px] text-gray-400 tracking-widest mb-1">ISACA CERTIFICATION</p>
        <h3 className="text-base font-bold mb-1 leading-snug">CISA</h3>
        <p className="text-xs text-gray-400 mb-2">Passed: July 2025</p>
        <a
          href="https://certification-link-c.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1 text-xs bg-white text-black rounded-md hover:bg-gray-200 transition"
        >
          View Credential
        </a>
      </div>
    </div>
  </div>
</div>


    </section>
  );
}
