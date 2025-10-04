

const Footer = () => (
  <footer className="w-full py-6 bg-black text-center border-t border-white/10 mt-12">
    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Krishna Krishna. All rights reserved.</p>
    <div className="flex justify-center gap-4 mt-2">
      <a href="https://github.com/krishna620350" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">GitHub</a>
      <a href="mailto:krishna@example.com" className="text-gray-400 hover:text-blue-400 transition">Email</a>
      <a href="https://www.linkedin.com/in/krishna-krishna/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">LinkedIn</a>
    </div>
    <div className="text-gray-500 text-xs mt-2">Kolkata, West Bengal, India</div>
  </footer>
);

export default Footer;
