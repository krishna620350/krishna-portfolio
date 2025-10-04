
import Navbar from "./components/Navbar";
import PageSpacer from "./components/PageSpacer";
import Home from "./pages/Home";
import EmojiFlood from "./components/EmojiFlood";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background and spotlight effect (if present) */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-r from-white via-black to-white opacity-80" />
      {/* Emoji rain effect (below overlay, below content) */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <EmojiFlood />
      </div>
      {/* Thin dark transparent overlay for content visibility (above emoji flood, below content) */}
      <div className="fixed inset-0 z-10 pointer-events-none" style={{background: "rgba(5, 5, 5, 0.85)"}} />
      <div className="relative z-20">
  <Navbar />
  <PageSpacer />
  <Home />
      </div>
    </div>
  );
}

export default App
