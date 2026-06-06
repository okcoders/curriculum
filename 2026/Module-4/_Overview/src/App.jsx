import { Routes, Route, Navigate } from "react-router-dom";
import Slides from "./components/Slides";
import day1Data from "./cardData/day1Data";
import day2Data from "./cardData/day2Data";
import day3Data from "./cardData/day3Data";
import day4Data from "./cardData/day4Data";

// Add a new route here for each day as you build out the cards.
// e.g. <Route path="/day5" element={<Slides cards={day5Data} />} />
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/day1" replace />} />
      <Route path="/day1" element={<Slides cards={day1Data} />} />
      <Route path="/day2" element={<Slides cards={day2Data} />} />
      <Route path="/day3" element={<Slides cards={day3Data} />} />
      <Route path="/day4" element={<Slides cards={day4Data} />} />
    </Routes>
  );
}

export default App;
