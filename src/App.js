import { LatLonToLoc } from "./components/LatLonToLoc";
import { Kahun } from "./components/Kahun";
import { WitchCode } from "./components/WhichCode";
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <LatLonToLoc></LatLonToLoc>
        <Kahun></Kahun>
        <WitchCode></WitchCode>
      </header>
    </div>
  );
}
export default App;
