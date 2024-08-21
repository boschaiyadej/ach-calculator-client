import { useState } from "react";
import axios from "axios";

const AchCalculator = () => {
  const [roomVolume, setRoomVolume] = useState("");
  const [airflowRate, setAirflowRate] = useState("");
  const [ach, setAch] = useState("");
  const [roomName, setRoomName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const calculateACH = (event) => {
    event.preventDefault();

    const roomVolumeNum = parseFloat(roomVolume);
    const airflowRateNum = parseFloat(airflowRate);

    if (
      !isNaN(roomVolumeNum) &&
      !isNaN(airflowRateNum) &&
      roomVolumeNum > 0 &&
      airflowRateNum > 0 &&
      roomName.trim() !== ""
    ) {
      const calculatedACH = ((airflowRateNum * 60) / roomVolumeNum).toFixed(2);
      setAch(calculatedACH);
    } else {
      showToastMessage(
        "All fields must be filled with positive numbers and Room Name must not be empty"
      );
    }
  };

  const submitData = async (event) => {
    event.preventDefault();

    const roomVolumeNum = parseFloat(roomVolume);
    const airflowRateNum = parseFloat(airflowRate);

    if (
      !isNaN(roomVolumeNum) &&
      !isNaN(airflowRateNum) &&
      roomVolumeNum > 0 &&
      airflowRateNum > 0 &&
      roomName.trim() !== "" &&
      ach
    ) {
      const formData = {
        roomName,
        roomVolume: roomVolumeNum,
        airflowRate: airflowRateNum,
        ach,
      };
      try {
        await axios.post("http://10.104.0.2/ach", formData);
        showToastMessage("Data submitted successfully!");
      } catch {
        showToastMessage("Error submitting data. Please try again.");
      }
    } else {
      showToastMessage(
        "Please calculate ACH first and ensure all fields are valid"
      );
    }
  };

  const resetACH = () => {
    setRoomVolume("");
    setAirflowRate("");
    setAch("");
    setRoomName("");
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-4">
        <h2 className="mb-4">Air Change Rate (ACH) Calculator</h2>
        <form id="achForm">
          <div className="form-group">
            <label htmlFor="roomName">Room Name:</label>
            <input
              type="text"
              className="form-control"
              id="roomName"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="roomVolumeACH">Room Volume (m³):</label>
            <input
              type="number"
              className="form-control"
              id="roomVolumeACH"
              value={roomVolume}
              onChange={(e) => setRoomVolume(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="airflowRate">Average Flow Rate (m³/min):</label>
            <input
              type="number"
              className="form-control"
              id="airflowRate"
              value={airflowRate}
              onChange={(e) => setAirflowRate(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            className="btn btn-primary me-2 mt-3"
            onClick={calculateACH}
          >
            Calculate ACH
          </button>
          <button
            type="button"
            className="btn btn-secondary me-2 mt-3"
            onClick={resetACH}
          >
            Reset
          </button>
        </form>
        {ach && roomName && (
          <div>
            <h4 className="mt-3">
              Room: <span>{roomName}</span>
              <br />
              Total Air Change Rate: <span>{ach} ACH</span>
            </h4>
            <button
              type="button"
              className="btn btn-success mt-3"
              onClick={submitData}
            >
              Save Data
            </button>
          </div>
        )}
      </div>

      {/* Toast */}
      <div
        className={`toast position-fixed bottom-0 end-0 m-3 ${
          showToast ? "show" : "hide"
        }`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header text-bg-primary">
          <strong className="me-auto">Notification</strong>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setShowToast(false)}
          ></button>
        </div>
        <div className="toast-body">{toastMessage}</div>
      </div>
    </div>
  );
};

export default AchCalculator;
