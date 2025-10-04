

const Projects = () => (
  <section id="projects" className="py-16">
    <h2 className="text-3xl font-bold mb-8 text-pink-400 text-center">Projects</h2>
    <div className="grid gap-8 md:grid-cols-2">
      <div className="bg-white/10 rounded-xl shadow-lg p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-2">AI Virtual Assistant IVR System</h3>
        <p className="text-gray-200 mb-2">Developed an advanced IVR system using Kore.ai’s AI Virtual Assistant platform, integrating ML and NLP for smart, human-like interactions. Optimized dialogue flows and built a JavaScript frontend for seamless user experience.</p>
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">Kore.ai</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">NLP</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">Machine Learning</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">JavaScript</span>
        </div>
      </div>
      <div className="bg-white/10 rounded-xl shadow-lg p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-2">Full-Stack Web Application</h3>
        <p className="text-gray-200 mb-2">Designed and developed scalable web applications at TCS using Node.js, Express.js, MongoDB, and React.js. Focused on API development, UI/UX, and secure integration between frontend and backend.</p>
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">Node.js</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">Express.js</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">MongoDB</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">React.js</span>
        </div>
      </div>
      <div className="bg-white/10 rounded-xl shadow-lg p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-2">IoT Data Acquisition Platform</h3>
        <p className="text-gray-200 mb-2">Built IoT-based solutions at NITTTR Bhopal, including sensor integration, microcontroller programming, and real-time data visualization for smart environments.</p>
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">IoT</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">C++</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">Arduino</span>
        </div>
      </div>
      <div className="bg-white/10 rounded-xl shadow-lg p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-2">Portfolio Website</h3>
        <p className="text-gray-200 mb-2">Personal portfolio built with React, Vite, and Tailwind CSS to showcase professional experience, skills, and projects.</p>
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">React</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">Vite</span>
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">Tailwind CSS</span>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
