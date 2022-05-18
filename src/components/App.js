import Intro from "./Intro";
import Navigation from "./Navigation";
import Features from "./Features";
import Download from "./Download";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
  return (
    <div className="font-rubik container mx-auto space-y-7 px-3">
      <Navigation />
      <Intro />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
