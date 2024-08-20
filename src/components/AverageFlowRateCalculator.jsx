import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const AverageFlowRateCalculator = () => {
  const [flowRate, setFlowRate] = useState("");
  const [numSockets, setNumSockets] = useState("");
  const [averageFlowRate, setAverageFlowRate] = useState("N/A");
  const [toast, setToast] = useState({ show: false, message: "" });

  const calculateAverage = () => {
    const flowRateNum = parseFloat(flowRate);
    const numSocketsNum = parseInt(numSockets, 10);
    if (!isNaN(flowRateNum) && !isNaN(numSocketsNum) && numSocketsNum > 0) {
      setAverageFlowRate(((flowRateNum / numSocketsNum) * 60).toFixed(2));
    } else {
      showToast("Please enter valid flow rate and number of sockets.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(averageFlowRate + " m³/min")
      .then(() =>
        showToast(
          "Average Flow Rate copied to clipboard: " +
            averageFlowRate +
            " m³/min"
        )
      );
  };

  const resetAverageFlowRateForm = () => {
    setFlowRate("");
    setNumSockets("");
    setAverageFlowRate("N/A");
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="mb-4">Average Flow Rate (m³/min) Calculator</h2>
        <div className="form-group">
          <label htmlFor="flowRate">Flow Rate (m³/s):</label>
          <input
            type="number"
            className="form-control"
            id="flowRate"
            value={flowRate}
            onChange={(e) => setFlowRate(e.target.value)}
            placeholder="Enter Flow Rate"
          />
        </div>
        <div className="form-group">
          <label htmlFor="numSockets">Number of Sockets:</label>
          <input
            type="number"
            className="form-control"
            id="numSockets"
            value={numSockets}
            onChange={(e) => setNumSockets(e.target.value)}
            placeholder="Enter Number of Sockets"
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={calculateAverage}
          >
            Calculate Average Flow Rate
          </button>
          <div
            className="mt-3"
            style={{ display: averageFlowRate !== "N/A" ? "block" : "none" }}
          >
            <h4>
              Average Flow Rate: <span>{averageFlowRate}</span> m³/min
            </h4>
            <button
              type="button"
              className="btn btn-success"
              onClick={copyToClipboard}
            >
              Copy Average Flow Rate
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetAverageFlowRateForm}
            >
              Reset
            </button>
          </div>
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

export default AverageFlowRateCalculator;
