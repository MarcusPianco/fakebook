import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";
import Home from './components/Home'

function App() {
  return (
    <>
      <Header />
      <Home/>
      <GlobalStyles/>
    </>
  );
}

export default App;
