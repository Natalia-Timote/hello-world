import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/About-me";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<div>Página não encontrada!</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
