import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; // Landing Page (Register/Login)
import Home from "./pages/Home"; // Main Home Page
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; 

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Default: Landing Page */}
          <Route path="/home" element={<Home />} /> {/* Home Page after login */}
        </Routes>

        {/* Show Footer & Scroll Button ONLY on Home Page */}
        {window.location.pathname === "/home" && (
          <>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
