import AchCalculator from "../components/AchCalculator";
import AverageFlowRateCalculator from "../components/AverageFlowRateCalculator";
import FlowRateCalculator from "../components/FlowRateCalculator";
import RoomVolumeCalculator from "../components/RoomVolumeCalculator";

const AchCalculatorPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <FlowRateCalculator />
        </div>
        <div className="col-md-6">
          <AverageFlowRateCalculator />
        </div>
        <div className="col-md-6 mt-4">
          <RoomVolumeCalculator />
        </div>
        <div className="col-md-6 mt-4">
          <AchCalculator />
        </div>
      </div>
    </div>
  );
};

export default AchCalculatorPage;
