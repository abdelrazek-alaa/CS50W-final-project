import Intro from "./Intro";
import Navigation from "./Navigation";
import Features from "./Features";
import Download from "./Download";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function fetchData(url) {
  return fetch(`/${url}/`)
    .then((res) => res.json())
    .then((data) => data);
}
function App() {
  const [loading, setLoading] = useState(true);
  const [navigation, setNavigation] = useState();
  const [intro, setIntro] = useState();
  const [features, setFeatures] = useState();
  const [download, setDownload] = useState();
  const [faq, setFaq] = useState();
  const [footer, setFooter] = useState();
  const [contact, setContact] = useState();

  useEffect(() => {
    Promise.all([
      // index 0 Intro Section
      fetchData("introSection"),
      // index 1 Nav Section
      fetchData("navbar"),
      // index 2 Feature Section
      fetchData("FeatureSection"),
      // index 3 Download Section
      fetchData("downloadSection"),
      // index 4 FAQ Section
      fetchData("faqSection"),
      // index 5 Footer Section
      fetchData("footer"),
      // index 6 Footer Section
      fetchData("contact"),
    ])
      .then((fetchedData) => {
        setIntro(fetchedData[0]);
        setNavigation(fetchedData[1]);
        setFeatures(fetchedData[2]);
        setDownload(fetchedData[3]);
        setFaq(fetchedData[4]);
        setFooter(fetchedData[5]);
        setContact(fetchedData[6]);
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
          <Features features={features} />
          <Download download={download} />
          <FAQ faq={faq} />
          <Contact contact={contact} />
          <Footer footer={footer} />
        </div>
      )}
    </div>
  );
}

export default App;
