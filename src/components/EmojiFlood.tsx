import React, { useEffect, useRef } from "react";

const EMOJIS = [
  "💻", "🖥️", "🖱️", "⌨️", "🧑‍💻", "📱", "🖨️", "🗂️", "🧮", "🕹️", "🛠️", "📀", "💾", "🧑‍🔬", "🔌", "🔋",
  "📡", "🛰️", "🧑‍🚀", "🧑‍🔧", "🧑‍🏫", "🧑‍🎓", "🧑‍🔬", "🧑‍💼", "🧑‍🔧", "🧑‍💻", "🧑‍🔬", "🧑‍🚀", "🧑‍🎤", "🧑‍🎨", "🧑‍🍳",
  "🧑‍🔧", "🧑‍💼", "🧑‍💻", "🧑‍🔬", "🧑‍🚀", "🧑‍🎤", "🧑‍🎨", "🧑‍🍳", "🧑‍🔧", "🧑‍💼", "🧑‍💻", "🧑‍🔬", "🧑‍🚀", "🧑‍🎤", "🧑‍🎨",
  "🧑‍🍳", "🧑‍🔧", "🧑‍💼", "🧑‍💻", "🧑‍🔬", "🧑‍🚀", "🧑‍🎤", "🧑‍🎨", "🧑‍🍳", "🧑‍🔧", "🧑‍💼", "🧑‍💻", "🧑‍🔬", "🧑‍🚀"
];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const EmojiFlood: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let running = true;
    const emojis: HTMLSpanElement[] = [];

    function createEmoji() {
      if (!running) return;
      const emoji = document.createElement("span");
      emoji.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      emoji.style.position = "absolute";
      emoji.style.left = `${randomBetween(0, 95)}vw`;
      emoji.style.top = "-2em";
      emoji.style.fontSize = `${randomBetween(1.5, 2.5)}rem`;
      emoji.style.opacity = `${randomBetween(0.7, 1)}`;
      emoji.style.pointerEvents = "none";
      emoji.style.transition = "transform 0.2s";
      if (!container) return;
      container.appendChild(emoji);
      emojis.push(emoji);

      const duration = randomBetween(4, 8);
      const translateY = window.innerHeight + 100;
      emoji.animate([
        { transform: `translateY(0px)` },
        { transform: `translateY(${translateY}px)` }
      ], {
        duration: duration * 1000,
        easing: "linear"
      });

      setTimeout(() => {
        emoji.remove();
        emojis.splice(emojis.indexOf(emoji), 1);
      }, duration * 1000);
    }

    const interval = setInterval(createEmoji, 250);
    return () => {
      running = false;
      clearInterval(interval);
      emojis.forEach(e => e.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 50,
      }}
      aria-hidden="true"
    />
  );
};

export default EmojiFlood;
