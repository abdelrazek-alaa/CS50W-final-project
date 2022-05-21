import Intro from "./Intro";
import Navigation from "./Navigation";
import Features from "./Features";
import Download from "./Download";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";

function App() {
  const [loading, setLoading] = useState(true);
  const [navigation, setNavigation] = useState();
  const [intro, setIntro] = useState();

  useEffect(() => {
    Promise.all([
      // index 0 Intro Section
      fetch("/introSection/")
        .then((res) => res.json())
        .then((data) => data),
      // index 1 Nav Section
      fetch("/navLinks/")
        .then((res) => res.json())
        .then((data) => data),
    ])
      .then((fetchedData) => {
        setIntro(fetchedData[0]);
        setNavigation(fetchedData[1]);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-screen flex text-very-dark-blue font-mono justify-center">
          <div className="text-3xl flex flex-col md:flex-row  justify-center items-center space-x-4">
            <h3>Loading</h3>
            <RefreshIcon className="h-20 w-20 animate-spin" />
          </div>
        </div>
      ) : (
        <div className="font-rubik container mx-auto space-y-7 px-3">
          <Navigation navigation={navigation} />
          <Intro intro={intro} />
          <Features />
          <Download />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
