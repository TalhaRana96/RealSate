import Companies from "./utils/components/Companies/Companies";
import Header from "./utils/components/Header/Header";
import Hero from "./utils/components/Hero/Hero";
import Residencies from "./utils/components/Residencies/Residencies";
import Value from "./utils/components/Value/Value";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Companies/>
      <Residencies/>
      <Value/>
    </div>
  );
}

export default App;
