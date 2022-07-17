import React from "react";
import Main from "./Components/Pages/Main";
import Battle from "./Components/Pages/Battle";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="battle" element={<Battle/>}/>
      </Routes>
  );
}

export default App;
