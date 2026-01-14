import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Quote from '@/components/Quote';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Programs from '@/components/Programs';
import Marquee from '@/components/Marquee';
import Location from '@/components/Location';
import Professionals from '@/components/Professionals';
import Facilities from '@/components/Facilities';
import CoachesEvents from '@/components/CoachesEvents';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Quote />
      <Features />
      <Gallery />
      <Programs />
      <Marquee />
      <Location />
      <Professionals />
      <Facilities />
      <CoachesEvents />
      <Footer />
    </main>
  );
}
