'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('hero');

  // Track active section
  useEffect(() => {
    const ids = ['hero', 'about', 'projects', 'contact'];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        let top: { id: string; ratio: number } | null = null;
        for (const e of entries) {
          const id = e.target.id;
          const ratio = e.intersectionRatio;
          if (!top || ratio > top.ratio) top = { id, ratio };
        }
        if (top) setActive(top.id);
      },
      { threshold: [0.2, 0.4, 0.6, 0.8], rootMargin: '-10% 0px -35% 0px' }
    );

    els.forEach((el) => io.observe(el));

    const onScrollEnd = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      if (nearBottom) setActive('contact');
    };
    window.addEventListener('scroll', onScrollEnd, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScrollEnd);
    };
  }, []);

  useEffect(() => {
    const onHash = () => setIsOpen(false);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
  <header className="fixed top-0 left-0 w-full z-50 h-16 sm:h-20 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-sm">
    <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 text-white sm:px-8">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-white transition-colors duration-500"
          aria-label="Back to top"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-white text-sm font-bold leading-none transition-colors duration-500 group-hover:border-teal-400 group-hover:text-teal-400">
            A
          </div>
          <div className="text-left leading-tight">
            <div className="text-base font-bold transition-colors duration-500 group-hover:text-teal-300">
              Azaz
            </div>
            <div className="text-xs text-gray-300 transition-colors duration-500 group-hover:text-teal-400">
              Cybersecurity and AI
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative py-1 transition-colors ${
                    isActive ? 'text-teal-300' : 'text-white hover:text-teal-300'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-teal-300 transition-all duration-300 will-change-transform ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          className="text-white transition hover:text-teal-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-black/90 backdrop-blur-lg transition-[max-height] duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="space-y-4 px-6 pb-6 pt-2 text-base font-medium text-white">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
              className="block transition hover:text-teal-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
