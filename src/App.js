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
import AfterHours from "./pages/AfterHours";
import Post from "./components/sections/fun/Post";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const darkMode = location.pathname.startsWith("/fun");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={darkMode}>
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
            <Route path="/fun" element={<AfterHours />}>
              <Route path=":slug" element={<Post />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </DarkModeContext.Provider>
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
