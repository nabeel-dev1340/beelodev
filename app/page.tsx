import Hero from './components/Hero';
import PlatformStats from './components/PlatformStats';
import AutomationSystems from './components/AutomationSystems';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import BlogPreview from './components/BlogPreview';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <AutomationSystems />
      <Packages />
      <PlatformStats />
      <Portfolio />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </main>
  );
}
