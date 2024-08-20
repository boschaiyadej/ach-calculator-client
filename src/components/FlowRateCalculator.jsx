import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const FlowRateCalculator = () => {
  const [flowRateInput, setFlowRateInput] = useState("");
  const [totalFlowRate, setTotalFlowRate] = useState(0);
  const [flowRates, setFlowRates] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "" });

  const addFlowRate = () => {
    const flowRate = parseFloat(flowRateInput);
    if (!isNaN(flowRate)) {
      const newTotal = totalFlowRate + flowRate;
      setTotalFlowRate(newTotal);
      setFlowRates([...flowRates, flowRate]);
      setFlowRateInput("");
      showToast(`Added flow rate: ${flowRate.toFixed(2)} m³/s`);
    } else {
      showToast("Please enter a valid flow rate.");
    }
  };

  const resetCalculator = () => {
    setTotalFlowRate(0);
    setFlowRates([]);
    setFlowRateInput("");
    showToast("Calculator reset.");
  };

  const copyTotalFlowRate = () => {
    navigator.clipboard
      .writeText(totalFlowRate.toFixed(2) + " m³/s")
      .then(() =>
        showToast(
          `Total Flow Rate copied to clipboard: ${totalFlowRate.toFixed(
            2
          )} m³/s`
        )
      );
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2>Total Flow Rate (m³/s) Calculator</h2>
        <div className="form-group">
          <label htmlFor="flowRateInput">Enter Flow Rate (m³/s):</label>
          <input
            type="number"
            className="form-control"
            id="flowRateInput"
            value={flowRateInput}
            onChange={(e) => setFlowRateInput(e.target.value)}
            placeholder="Enter flow rate"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={addFlowRate}>
            Add Flow Rate
          </button>
        </div>
        <div
          className="mt-3"
          style={{ display: totalFlowRate > 0 ? "block" : "none" }}
        >
          <h4>Flow Rate List:</h4>
          <ol>
            {flowRates.map((rate, index) => (
              <li key={index}>flow rate is {rate.toFixed(2)} m³/s</li>
            ))}
          </ol>
          <h4>
            Total Flow Rate: <span>{totalFlowRate.toFixed(2)}</span> m³/s
          </h4>
          <button
            type="button"
            className="btn btn-success"
            onClick={copyTotalFlowRate}
          >
            Copy Total Flow Rate
          </button>
          <button className="btn btn-secondary" onClick={resetCalculator}>
            Reset
          </button>
        </div>
      </div>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={toast.show}
          onClose={() => setToast({ show: false, message: "" })}
          delay={3000}
          autohide
        >
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default FlowRateCalculator;
