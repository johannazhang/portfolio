import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Project from "./components/sections/projects/project/Project";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />}>
              <Route path="eng" element={<Portfolio />} />
              <Route path="design" element={<Portfolio />} />
              <Route path=":slug" element={<Project />} />
            </Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
