import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/About-me";
import Home from "pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
    
        <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="*" element={<div>Página não encontrada!</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
