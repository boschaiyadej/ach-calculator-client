import { Link } from "react-router-dom";
import { FaHome, FaCalculator } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ach-calculator">
              <FaCalculator /> ACH Calculator
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
