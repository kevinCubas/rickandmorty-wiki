import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { CharacterContainer } from "./components/CharactersContainer";
import { NavigationHeader } from "./components/Header";
import { MainRoutes } from "./routes";

function App() {

  return (
    <Router>
      <NavigationHeader />
      <MainRoutes />
    </Router>
  )
}

export default App;
