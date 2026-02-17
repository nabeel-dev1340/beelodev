import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import PlatformStats from './components/PlatformStats';
import Services from './components/Services';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechMarquee />
      <PlatformStats />
      <Services />
      <Packages />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
