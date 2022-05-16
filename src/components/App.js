import Intro from "./Intro";
import Navigation from "./Navigation";
import Features from "./Features";
import Download from "./Download";
function App() {
  return (
    <div className="font-rubik container mx-auto space-y-7 px-3">
      <Navigation />
      <Intro />
      <Features />
      <Download />
    </div>
  );
}

export default App;
