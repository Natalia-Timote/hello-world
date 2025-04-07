import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import Post from "pages/Post";
import AboutMe from "pages/About-me";
import DefaultPage from "components/DefaultPage";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
