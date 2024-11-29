import { useState } from "react";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
