import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-gray-400 uppercase tracking-widest mb-16 text-sm">
          What I’ve Worked On
        </h2>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
