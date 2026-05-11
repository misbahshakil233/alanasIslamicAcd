import Hero from "../components/Hero";
import Courses from "../components/Courses";
import About from "../components/About";
import Footer from "../components/Footer";
import Features from "@/components/Features";
import TrialSection from "@/components/TrialSection";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Assure from "@/components/Assure";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrialSection />
      <Welcome />
      <Services />
      <Assure />
      <Courses />
      <Testimonials />
      
      
    </main>
  );
}