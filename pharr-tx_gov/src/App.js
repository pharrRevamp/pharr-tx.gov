import React from "react";
import HomePage from "./homePage/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import "./css/index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello World! testing!</h1>
      <HomePage />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
