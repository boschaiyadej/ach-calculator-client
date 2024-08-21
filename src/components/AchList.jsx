import { useState, useEffect } from "react";
import axios from "axios";

const AchList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://152.42.184.239/ach");

        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setError("Unexpected data format received from the server.");
        }

        setLoading(false);
      } catch {
        setError("Error fetching data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">ACH List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Room Name</th>
            <th scope="col">Room Volume (m³)</th>
            <th scope="col">Average Flow Rate (m³/min)</th>
            <th scope="col">ACH</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.room_name}</td>
                <td>{item.room_volume}</td>
                <td>{item.airflow_rate}</td>
                <td>{item.ach}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AchList;
