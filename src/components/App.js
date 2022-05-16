import Intro from "./Intro";
import Navigation from "./Navigation";
import Features from "./Features";
function App() {
  return (
    <div className="font-rubik container mx-auto space-y-7 px-3">
      <Navigation />
      <Intro />
      <Features />
    </div>
  );
}

export default App;
