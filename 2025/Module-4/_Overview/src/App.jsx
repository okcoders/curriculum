import { useState } from "react";
import cardData from "./cardData/day1Data";
import GenerateCards from "./components/cards/generate-cards";
import "./App.css";

function App() {
  
  return (
    <>
      <div className="App">
        <h1>Module 4: Day 1</h1>
        <GenerateCards cardData={cardData} />
      </div>
    </>
  );
}

export default App;
