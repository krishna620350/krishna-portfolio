import React from 'react';

const Navbar = () => (
	<nav className="w-full bg-gray-900 text-white py-4 fixed top-0 left-0 z-50 shadow">
		<div className="max-w-5xl mx-auto flex items-center justify-between px-4">
			<span className="font-bold text-xl">MyPortfolio</span>
			<div className="flex gap-6">
				<a href="#home" className="hover:text-blue-400 transition">Home</a>
				<a href="#about" className="hover:text-blue-400 transition">About</a>
				<a href="#projects" className="hover:text-blue-400 transition">Projects</a>
				<a href="#experience" className="hover:text-blue-400 transition">Experience</a>
				<a href="#contact" className="hover:text-blue-400 transition">Contact</a>
			</div>
		</div>
	</nav>
);

export default Navbar;
