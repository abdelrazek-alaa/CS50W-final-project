import Intro from "./Intro";
import Navigation from "./Navigation";
import Features from "./Features";
import Download from "./Download";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Loading from "./Loading";

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
        <Loading />
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
