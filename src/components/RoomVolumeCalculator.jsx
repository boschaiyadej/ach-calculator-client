import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RoomVolumeCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [roomVolume, setRoomVolume] = useState("N/A");
  const [showToast, setShowToast] = useState(false);

  const calculateRoomVolume = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!isNaN(l) && !isNaN(w) && !isNaN(h)) {
      setRoomVolume((l * w * h).toFixed(2));
    }
  };

  const copyResultRoomVolume = () => {
    navigator.clipboard.writeText(roomVolume + " m³").then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  const resetRoomVolumeForm = () => {
    setLength("");
    setWidth("");
    setHeight("");
    setRoomVolume("N/A");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="mb-4">Room Volume (m³) Calculator</h2>
        <form id="roomVolumeForm">
          <div className="form-group">
            <label htmlFor="length">Length (m):</label>
            <input
              type="number"
              className="form-control"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Enter length (m)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="width">Width (m):</label>
            <input
              type="number"
              className="form-control"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Enter width (m)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height (m):</label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height (m)"
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={calculateRoomVolume}
          >
            Calculate Room Volume
          </button>
        </form>
        <div
          className="mt-4"
          style={{ display: roomVolume !== "N/A" ? "block" : "none" }}
        >
          <h4>
            Total Room Volume: <span>{roomVolume}</span> m³
          </h4>
          <button
            type="button"
            className="btn btn-success"
            onClick={copyResultRoomVolume}
          >
            Click to Copy Total Room Volume
          </button>
          <button
            type="button"
            className="btn btn-secondary ml-2"
            onClick={resetRoomVolumeForm}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Bootstrap Toast for copy notification */}
      <div
        className={`toast position-fixed bottom-0 end-0 p-3 ${
          showToast ? "show" : ""
        }`}
        style={{ zIndex: 11 }}
        id="liveToast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">Notification</strong>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowToast(false)}
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">
          Total Room Volume copied to clipboard: {roomVolume} m³
        </div>
      </div>
    </div>
  );
};

export default RoomVolumeCalculator;
