import { LonLatToLoc } from "./components/LonLatToLoc";
import { Kahun } from "./components/Kahun";
import { WitchCode } from "./components/WhichCode";
function App() {
  LonLatToLoc();
  return (
    <div className="App">
      <header className="App-header">
        <Kahun></Kahun>
        <WitchCode></WitchCode>
      </header>
    </div>
  );
}
export default App;
