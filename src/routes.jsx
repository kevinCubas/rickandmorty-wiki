import { Routes, Route, Navigate } from "react-router-dom";
import { Details } from "./Pages/Details";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

export const MainRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:id" element={<Details />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}