import React from "react";
import HomePage from "./homePage/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./css/index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello World! testing!</h1>
      <HomePage />
      <Footer />      
    </div>
  );
}

export default App;
