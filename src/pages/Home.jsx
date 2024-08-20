import { FaCalculator, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Welcome to ACH Calculator!</h1>
      <Link className="home-link" to="/ach-calculator">
        <button type="button" className="btn btn-success btn-lg m-2">
          <FaCalculator className="me-2 mb-1" />
          ACH Calculator
        </button>
      </Link>
      <Link className="home-link" to="/ach-list">
        <button type="button" className="btn btn-warning btn-lg">
          <FaList className="me-2 mb-1" />
          ACH List
        </button>
      </Link>
    </div>
  );
}

export default Home;
