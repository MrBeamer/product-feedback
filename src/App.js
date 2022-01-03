import "./App.scss";
import { Navigation } from "./components";
import { InfoBar } from "./components";
import { Button } from "./components";

function App() {
  return (
    <div className="app-container">
      <div className="flex-container">
        <Navigation />
        <div className="container">
          <InfoBar />
          <div className="test">test</div>
        </div>
      </div>
    </div>
  );
}

export default App;
