

const Hero = () => (
  <section
    id="home"
    className="flex flex-col items-center justify-center w-full text-center px-4"
    style={{
      minHeight: 'calc(100vh - 64px)', // 64px = navbar height
      scrollMarginTop: '80px',
    }}
  >
    <h1 className="text-5xl font-extrabold mb-4 text-blue-400">Krishna</h1>
    <h2 className="text-2xl text-gray-300 mb-4 font-semibold">Software Development Engineer & Machine Learning Engineer</h2>
    <p className="text-gray-200 max-w-xl mx-auto mb-6">Welcome to my portfolio! I build scalable software and intelligent ML solutions. Explore my work and experience below.</p>
    <a href="#contact" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold shadow hover:bg-blue-600 transition">Contact Me</a>
  </section>
);

export default Hero;

