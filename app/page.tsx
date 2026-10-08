import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Learn from "./components/Learn";
import WhyMehta from "./components/WhyMehta";
import Program from "./components/Program";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Learn />
        <WhyMehta />
        <Program />
        <Process />
        <FAQ />
        <LeadForm />
      </main>

      <Footer />
    </>
  );
}