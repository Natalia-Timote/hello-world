import AboutMe from "./pages/About-me";
import Home from "./pages/Home";

const page = window.location.pathname === '/' ? <Home /> : <AboutMe />;

function App() {
  return page;
}

export default App;
