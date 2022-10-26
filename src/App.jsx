import { BrowserRouter as Router } from "react-router-dom"
import { NavigationHeader } from "./components/Header";
import { MainRoutes } from "./routes";
import { Footer } from "./components/Footer";

export function App() {

  return (
    <Router>
      <NavigationHeader />
      <MainRoutes />
      <Footer />
    </Router>
  )
}
