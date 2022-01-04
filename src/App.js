import "./App.scss";
import { FeedbackContainer, Navigation } from "./components";
import { InfoBar } from "./components";

function App() {
  return (
    <div className="app-container">
      <div className="flex-container">
        <Navigation />
        <div className="container">
          <InfoBar />
          <FeedbackContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
