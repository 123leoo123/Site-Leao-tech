import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { TargetAudience } from "./components/TargetAudience";
import { Testimonials } from "./components/Testimonials";
import { Plans } from "./components/Plans";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <TargetAudience />
        <Testimonials />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
