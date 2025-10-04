import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";





const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState<string | null>(null);

  // Add your reCAPTCHA site key here
  // Use Vite environment variable for frontend
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const sendFormspree = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSent(false);
    const form = formRef.current;
    if (!form) return;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLInputElement)?.value.trim();
    if (!name || !email || !message) {
      setError("All required fields must be filled.");
      return;
    }
    if (!captcha) {
      setError("Please complete the reCAPTCHA to verify you are human.");
      return;
    }
    // Set system time in IST for the 'time' field
    const now = new Date();
    const istOffset = 5.5 * 60; // IST is UTC+5:30
    const istTime = new Date(now.getTime() + (istOffset + now.getTimezoneOffset()) * 60000);
    const istString = istTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    let timeInput = form.elements.namedItem("time") as HTMLInputElement;
    if (!timeInput) {
      timeInput = document.createElement("input");
      timeInput.type = "hidden";
      timeInput.name = "time";
      form.appendChild(timeInput);
    }
    timeInput.value = istString;
    setSending(true);
    try {
      const formData = new FormData(form);
      const response = await fetch("https://formspree.io/f/mkgqzglb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setSent(true);
        setSending(false);
        setCaptcha(null);
        if (formRef.current) formRef.current.reset();
      } else {
        setError("Failed to send message. Please try again later.");
        setSending(false);
      }
    } catch (err) {
      console.error("Formspree error:", err);
      setError("Failed to send message. Please try again later.");
      setSending(false);
    }
  };

  return (
  <section id="contact" className="py-16 max-w-xl mx-auto scroll-mt-24">
      <h2 className="text-4xl font-extrabold mb-6 text-purple-400 text-center drop-shadow-lg tracking-wide">Contact Me</h2>
  <form
  ref={formRef}
  onSubmit={sendFormspree}
  className="flex flex-col gap-6 bg-gradient-to-br from-purple-900/80 via-gray-900/90 to-blue-900/80 p-8 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-lg"
  autoComplete="off"
>
        <label className="flex flex-col text-left text-white font-semibold gap-1">
          <span className="inline-flex items-center">Name <span className="text-red-400 ml-1">*</span></span>
          <input name="name" type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm" required />
        </label>
        <label className="flex flex-col text-left text-white font-semibold gap-1">
          <span className="inline-flex items-center">Email <span className="text-red-400 ml-1">*</span></span>
          <input name="email" type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm" required />
        </label>
  {/* Hidden input for IST time will be set dynamically before submit */}
  <input type="hidden" name="time" />
        <label className="flex flex-col text-left text-white font-semibold gap-1">
          File (optional)
          <input name="user_file" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200 bg-gray-900/80 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm" />
        </label>
        <label className="flex flex-col text-left text-white font-semibold gap-1">
          <span className="inline-flex items-center">Message <span className="text-red-400 ml-1">*</span></span>
          <textarea name="message" placeholder="Your Message" className="px-4 py-3 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm resize-none" rows={5} required />
        </label>
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token: string | null) => setCaptcha(token)}
            theme="dark"
            className="mx-auto"
          />
        </div>
        <button type="submit" disabled={sending} className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition-all duration-200 mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
          {sending ? "Sending..." : "Send Message ✉️"}
        </button>
        {sent && <p className="text-green-400 text-center font-semibold mt-2">Message sent successfully!</p>}
        {error && <p className="text-red-400 text-center font-semibold mt-2">{error}</p>}
      </form>
    </section>
  );
};

export default ContactForm;

