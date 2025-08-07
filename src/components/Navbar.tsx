'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6  sm:px-8 py-4 flex justify-between items-center text-white">
        
        {/* Logo / Name */}
        <a
  href="#"
  className="flex items-center gap-3 text-white group hover:text-blue-400 transition"
  aria-label="Back to top"
>
  {/* Logo: Stylized A */}
  <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center text-sm font-bold group-hover:border-blue-400 group-hover:text-blue-400 transition leading-none">
    A
  </div>

  {/* Name Text */}
  <div className="leading-tight text-left">
    <div className="text-base font-bold">Azaz</div>
    <div className="text-xs text-gray-300 group-hover:text-blue-400 transition">Cybersecurity and AI</div>
  </div>
</a>


        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-blue-400 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-6 pt-2 space-y-4 text-white text-base font-medium">
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </header>
  );
}
