import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AchCalculatorPage from "./pages/AchCalculatorPage";
import AchListPage from "./pages/AchListPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ach-calculator" element={<AchCalculatorPage />} />
          <Route path="/ach-list" element={<AchListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
