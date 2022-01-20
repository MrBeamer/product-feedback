import React, { useState } from "react";
import { Homepage, AddFeedback, EditFeedback, FeedbackView } from "./views/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const [test, setTest] = useState(() => localStorage.getItem("listFeedback"));

  // let list = localStorage.getItem("listFeedback");
  // list = JSON.parse(list);
  // console.log(list);

  console.log(JSON.parse(test));
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add-feedback" element={<AddFeedback />} />
          <Route path="/:feedbackId" element={<FeedbackView />} />
          <Route path="/edit" element={<EditFeedback />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// Naming convention: onSubjectEvent={handleSubjectEvent}
