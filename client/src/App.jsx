import Header from "./components/header";
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import CTA from "./components/CTA";
import Footer from "./components/footer";
import ShortenerForm from "./components/shortenerForm";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShortenerForm />
      <Benefits />
      <CTA />
      <Footer />
    </>
  );
}
