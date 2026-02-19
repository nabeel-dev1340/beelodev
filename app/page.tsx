import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformStats from './components/PlatformStats';
import AutomationSystems from './components/AutomationSystems';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PlatformStats />
        <AutomationSystems />
        <Packages />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
