import React from "react";
//components
import Header from "./components/Header";
import Home from "./components/Home";
//styles
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <GlobalStyle></GlobalStyle>
    </div>
  );
}

export default App;
