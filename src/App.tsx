import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ValueProposition from './components/ValueProposition';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Teachers from './components/Teachers';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <ValueProposition />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Teachers />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
