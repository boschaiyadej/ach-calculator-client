import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AchCalculatorPage from "./pages/AchCalculatorPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ach-calculator" element={<AchCalculatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
