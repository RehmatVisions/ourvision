import VisionNavbar from './components/VisionNavbar';
import VisionHero from './components/VisionHero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e0e5ec]">
      <VisionNavbar />
      <VisionHero />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
