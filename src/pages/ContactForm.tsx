
const ContactForm = () => (
  <section id="contact" className="py-16 max-w-xl mx-auto">
    <h2 className="text-3xl font-bold mb-4 text-purple-400 text-center">Contact</h2>
    <form className="flex flex-col gap-4 bg-white/10 p-6 rounded-xl shadow border border-white/20">
      <input type="text" placeholder="Your Name" className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      <input type="email" placeholder="Your Email" className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      <textarea placeholder="Your Message" className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={5} required />
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition">Send</button>
    </form>
  </section>
);

export default ContactForm;

