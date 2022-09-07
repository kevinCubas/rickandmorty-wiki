import { Routes, Route, useNavigate } from "react-router-dom";
import { Details } from "./Pages/Details";
import { Home } from "./Pages/Home";

export const MainRoutes = () => {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  )
}