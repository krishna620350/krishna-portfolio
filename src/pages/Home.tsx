import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import ContactForm from './ContactForm';
import Footer from '../components/Footer';


const Home = () => (
  <>
  <div className="max-w-5xl mx-auto px-4">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <ContactForm />
    </div>
    <Footer />
  </>
);

export default Home;
					