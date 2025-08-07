'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { ExternalLink, X } from 'lucide-react';

const TECH_LINKS: Record<string, string> = {
  // Languages & Core Tech
  Python: 'https://www.python.org',
  HTML: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  CSS: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',

  // Platforms
  'Jupyter Notebook': 'https://jupyter.org',
  'Chrome Extension': 'https://developer.chrome.com/docs/extensions/',
  
  // Libraries & Tools
  TensorFlow: 'https://www.tensorflow.org',
  Keras: 'https://keras.io',
  Matplotlib: 'https://matplotlib.org',
  Plotly: 'https://plotly.com',

  // Models
  CNN: 'https://en.wikipedia.org/wiki/Convolutional_neural_network',
  VGG16: 'https://neurohive.io/en/popular-networks/vgg16/',
  VGG19: 'https://neurohive.io/en/popular-networks/vgg19/',
  AlexNet: 'https://en.wikipedia.org/wiki/AlexNet',

  // Evaluation Metrics & Visualization
  'F1 Score': 'https://en.wikipedia.org/wiki/F1_score',
  AUC: 'https://en.wikipedia.org/wiki/Receiver_operating_characteristic#Area_under_the_curve',
  'Data Visualization': 'https://en.wikipedia.org/wiki/Data_visualization',

  // Design & UX
  'Responsive Design': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
  Accessibility: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
};


export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative block py-10 border-b border-white/20 group cursor-pointer"
      >
        <div className="absolute inset-0 opacity-20 group-hover:opacity-80 transition-opacity duration-300">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 px-2 sm:px-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 group-hover:translate-x-1 transition-transform duration-300">
            {project.subtitle}
          </p>
          <h3 className="text-3xl sm:text-5xl font-bold group-hover:translate-x-1 transition-transform duration-300">
            {project.title}
          </h3>

        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-[#0f172a] text-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>
            </div>

            {/* Description */}
            <p className="whitespace-pre-line text-sm leading-relaxed mb-6 text-gray-200">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech?.map((tech, index) => (
                <a
                  key={index}
                  href={TECH_LINKS[tech] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 transition text-white px-3 py-1.5 text-xs rounded-full"
                >
                  <ExternalLink size={14} className="opacity-70" />
                  {tech}
                </a>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 underline"
                >
                  <ExternalLink size={16} />
                  GitHub Repo
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-green-400 hover:text-green-300 underline"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
