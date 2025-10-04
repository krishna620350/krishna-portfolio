
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
    { href: "#home", label: "🏠 Home" },
    { href: "#about", label: "🙋‍♂️ About" },
    { href: "#projects", label: "💼 Project" },
    { href: "#experience", label: "🧑‍💻 Experience" },
    { href: "#contact", label: "✉️ Contact" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setIsTop(window.scrollY < 5);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`w-full text-white py-4 fixed top-0 left-0 z-50 shadow backdrop-blur-md ${isTop ? "" : "bg-black/40"}`}>
			   <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-16">
				   <div className="flex items-center gap-4">
					   <span className="font-bold text-xl flex items-center gap-2">
						   <a href="#home" className="focus:outline-none" aria-label="Home">
							   <div className="size-12 rounded-full bg-[radial-gradient(at_25%_25%,white,theme(colors.zinc.900)_75%)] flex items-center justify-center p-2">
								   <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
							   </div>
						   </a>
					   </span>
				   </div>
				   {/* Desktop/Tablet menu */}
				   <div className="hidden md:flex gap-6">
					   {NAV_LINKS.map(link => (
						   <a key={link.href} href={link.href} className="hover:text-blue-400 transition">{link.label}</a>
					   ))}
				   </div>
				   {/* Hamburger for mobile */}
				   <button
					   className="md:hidden flex flex-col justify-center items-center w-12 h-12 focus:outline-none ml-auto"
					   aria-label="Open menu"
					   onClick={() => setOpen(true)}
				   >
					   <span className="block w-7 h-0.5 bg-white mb-1.5 rounded"></span>
					   <span className="block w-7 h-0.5 bg-white mb-1.5 rounded"></span>
					   <span className="block w-7 h-0.5 bg-white rounded"></span>
				   </button>
			   </div>
			{/* Mobile right-side panel */}
			{open && (
				<div className="fixed inset-0 z-50 bg-black/60 flex justify-end md:hidden">
					<div className="w-64 h-screen bg-gray-900 shadow-lg flex flex-col p-6 animate-slide-in">
						<button
							className="self-end mb-8 text-2xl text-gray-400 hover:text-white focus:outline-none"
							aria-label="Close menu"
							onClick={() => setOpen(false)}
						>
							&times;
						</button>
						{NAV_LINKS.map(link => (
							<a
								key={link.href}
								href={link.href}
								className="py-3 px-2 text-lg rounded hover:bg-gray-800 hover:text-blue-400 transition"
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			)}
			{/* Slide-in animation */}
			<style>{`
				@keyframes slide-in {
					from { transform: translateX(100%); }
					to { transform: translateX(0); }
				}
				.animate-slide-in {
					animation: slide-in 0.3s cubic-bezier(.4,0,.2,1);
				}
			`}</style>
		</nav>
	);
};

export default Navbar;
