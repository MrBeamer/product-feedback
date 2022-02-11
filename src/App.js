import React from "react";
import {
  Homepage,
  AddFeedback,
  EditFeedback,
  FeedbackView,
  Roadmap,
} from "./views/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/roadmap" element={<Roadmap />} />

          <Route path="/add-feedback" element={<AddFeedback />} />
          <Route path="/:feedbackId" element={<FeedbackView />} />
          <Route path="/:feedbackId/edit" element={<EditFeedback />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
