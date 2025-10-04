import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 flex flex-col items-center">
      <header className="w-full py-8 px-4 text-center bg-white/10 shadow-2xl rounded-2xl mt-8 mb-8 backdrop-blur-lg border border-white/20">
        <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg">Krishna</h1>
        <h2 className="text-2xl text-gray-300 mb-4">Software Development Engineer & Machine Learning Engineer</h2>
        <p className="text-gray-200">Welcome to my portfolio! I build scalable software and intelligent ML solutions.</p>
      </header>
      <main className="max-w-4xl w-full flex-1 py-8 px-4 flex flex-col gap-12">
        <section className="bg-white/10 shadow-xl rounded-xl p-8 mb-8 backdrop-blur-lg border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-300 drop-shadow">Skills</h2>
          {/* Add your skills here, e.g. <SkillList skills={skills} /> */}
        </section>
        <section className="bg-white/10 shadow-xl rounded-xl p-8 mb-8 backdrop-blur-lg border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-pink-300 drop-shadow">Projects</h2>
          {/* Add your projects here, e.g. <ProjectCard ... /> */}
        </section>
      </main>
      <footer className="w-full py-4 text-center text-gray-400 bg-white/10 shadow-2xl rounded-2xl mb-8 backdrop-blur-lg border border-white/20">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
