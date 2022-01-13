import "./App.scss";
import { Homepage, AddFeedback } from "./views/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add-feedback" element={<AddFeedback />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
