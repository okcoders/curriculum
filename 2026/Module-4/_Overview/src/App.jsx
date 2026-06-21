import { Routes, Route, Navigate } from "react-router-dom";
import Slides from "./components/Slides";
import day1Data from "./cardData/day1Data";
import day2Data from "./cardData/day2Data";
import day3Data from "./cardData/day3Data";
import day4Data from "./cardData/day4Data";
import day5Data from "./cardData/day5Data";
import day6Data from "./cardData/day6Data";
import day8Data from "./cardData/day8Data";

// Day 7 was used as TypeScript refactor work time — no deck.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/day1" replace />} />
      <Route path="/day1" element={<Slides cards={day1Data} />} />
      <Route path="/day2" element={<Slides cards={day2Data} />} />
      <Route path="/day3" element={<Slides cards={day3Data} />} />
      <Route path="/day4" element={<Slides cards={day4Data} />} />
      <Route path="/day5" element={<Slides cards={day5Data} />} />
      <Route path="/day6" element={<Slides cards={day6Data} />} />
      <Route path="/day8" element={<Slides cards={day8Data} />} />
    </Routes>
  );
}

export default App;
