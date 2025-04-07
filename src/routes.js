import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import Post from "pages/Post";
import AboutMe from "pages/About-me";
import DefaultPage from "components/DefaultPage";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada!</div>} />
      </Routes>


      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
