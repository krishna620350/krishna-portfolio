

import { useState } from "react";

const PROJECTS = [
  {
    title: "AI Virtual Assistant IVR System",
    highlights: "Advanced IVR system using Kore.ai’s AI Virtual Assistant, ML & NLP for smart interactions.",
    description: "Developed an advanced IVR system using Kore.ai’s AI Virtual Assistant platform, integrating ML and NLP for smart, human-like interactions. Optimized dialogue flows and built a JavaScript frontend for seamless user experience.",
    tags: ["Kore.ai", "NLP", "Machine Learning", "JavaScript"],
  },
  {
    title: "Full-Stack Web Application",
    highlights: "Scalable web apps at TCS using Node.js, Express.js, MongoDB, React.js.",
    description: "Designed and developed scalable web applications at TCS using Node.js, Express.js, MongoDB, and React.js. Focused on API development, UI/UX, and secure integration between frontend and backend.",
    tags: ["Node.js", "Express.js", "MongoDB", "React.js"],
  },
  {
    title: "IoT Data Acquisition Platform",
    highlights: "IoT solutions at NITTTR Bhopal: sensor integration, microcontroller programming, real-time data viz.",
    description: "Built IoT-based solutions at NITTTR Bhopal, including sensor integration, microcontroller programming, and real-time data visualization for smart environments.",
    tags: ["IoT", "C++", "Arduino"],
  },
  {
    title: "Portfolio Website",
    highlights: "Personal portfolio with React, Vite, Tailwind CSS to showcase experience and projects.",
    description: "Personal portfolio built with React, Vite, and Tailwind CSS to showcase professional experience, skills, and projects.",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="projects" className="py-16 " style={{ scrollMarginTop: '88px' }}>
      <h2 className="text-3xl font-bold mb-8 text-pink-400 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.title}
            className="perspective"
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${openIndex === idx ? 'rotate-y-180' : ''}`}
              style={{ minHeight: 260 }}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {/* Front Side */}
              <div className="absolute inset-0 bg-white/10 rounded-xl shadow-lg p-6 border border-white/20 cursor-pointer transition hover:scale-[1.03] backface-hidden">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-2">{project.highlights}</p>
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <button
                  className="mt-2 px-3 py-1 text-xs rounded-full font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-500 text-white hover:bg-pink-600"
                  onClick={e => { e.stopPropagation(); setOpenIndex(idx); }}
                >
                  Show More
                </button>
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 bg-white/20 rounded-xl shadow-lg p-6 border border-white/20 cursor-pointer transition hover:scale-[1.03] backface-hidden rotate-y-180 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-2">{project.description}</p>
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                <button
                  className="mt-2 px-3 py-1 text-xs rounded-full font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-500 text-white hover:bg-pink-600"
                  onClick={e => { e.stopPropagation(); setOpenIndex(null); }}
                >
                  Show Less
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-180 .backface-hidden {
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
