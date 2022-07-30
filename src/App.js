import React from "react";
import Main from "./Components/Pages/Main";
import Battle from "./Components/Pages/Battle";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="battle" element={<Battle/>}/>
      </Routes>
      <Footer />
      </>
  );
}

export default App;
