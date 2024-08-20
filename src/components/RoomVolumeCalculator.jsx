import { useState } from "react";

const RoomVolumeCalculator = () => {
  const [roomVolume, setRoomVolume] = useState("N/A");

  const calculateRoomVolume = () => {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
      setRoomVolume((length * width * height).toFixed(2));
    }
  };

  const copyResultRoomVolume = () => {
    navigator.clipboard
      .writeText(roomVolume + " m³")
      .then(() =>
        alert("Total Room Volume copied to clipboard: " + roomVolume + " m³")
      );
  };

  const resetRoomVolumeForm = () => {
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";
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
    </div>
  );
};

export default RoomVolumeCalculator;
