

import { useState } from "react";

const fullAbout = `As a passionate and results-driven Computer Science and Engineering professional, I bring over 1 year of experience at Tata Consultancy Services (TCS), where I've contributed to the design and development of intelligent software solutions with a focus on AI, NLP, and frontend development.\n\nMost recently, I led the development of an advanced IVR system powered by Kore.ai’s AI Virtual Assistant (IVA) platform—leveraging Machine Learning and Natural Language Processing to enable smart, human-like interactions. On the frontend, I used JavaScript to build seamless, responsive interfaces that enhance user experience.\n\nI'm deeply interested in emerging technologies like Deep Learning and conversational AI, and I’m committed to staying ahead of tech trends to solve complex business challenges. With a strong foundation in software engineering, leadership, and a proven track record of delivering high-quality solutions, I’m eager to drive impact in cutting-edge IT roles.\n\nCore Skills: AI & Deep Learning | NLP | Kore.ai | JavaScript | IVR Systems | Software Engineering | Frontend Development | TCS | Agile Delivery`;

const shortAbout = `As a passionate and results-driven Computer Science and Engineering professional, I bring over 1 year of experience at Tata Consultancy Services (TCS), where I've contributed to the design and development of intelligent software solutions with a focus on AI, NLP, and frontend development.`;

const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
  <section id="about" className="py-16 text-center mt-10" style={{ scrollMarginTop: '88px' }}>
      <h2 className="text-3xl font-bold mb-4 text-blue-400">About Me</h2>
      <p className="text-gray-200 mb-4 whitespace-pre-line">
        {showMore ? fullAbout : shortAbout}
      </p>
      {!showMore && (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold shadow hover:bg-blue-600 transition mb-4"
          onClick={() => setShowMore(true)}
        >
          Show More
        </button>
      )}
      {showMore && (
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-full font-semibold shadow hover:bg-gray-800 transition mb-4"
          onClick={() => setShowMore(false)}
        >
          Show Less
        </button>
      )}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">AI & Deep Learning</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">NLP</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">Kore.ai</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">JavaScript</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">IVR Systems</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">Software Engineering</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">Frontend Development</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">TCS</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">Agile Delivery</span>
      </div>
    </section>
  );
};

export default About;

