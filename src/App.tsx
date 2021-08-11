import React from 'react';
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Quiz, Navbar } from "./components";


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Quiz />
      <Routes>
        {/* <Route path="/quiz" element={<Quiz />} /> */}
      </Routes>
    </div>
  );
}

export default App;