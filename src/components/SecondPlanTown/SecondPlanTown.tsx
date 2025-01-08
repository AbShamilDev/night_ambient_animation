import TownContainer from "../TownContainer/TownContainer";
import "./SecondPlanTown.scss";

const SecondPlanTown = () => {
  return (
    <div className="secondPlanWrapper" style={{ paddingBottom: "60px" }}>
      <TownContainer
        animationDuration={60}
        baseWidth={15}
        color="#232323"
        baseHeightInPercent={26}
        secondPlan
      />
    </div>
  );
};

export default SecondPlanTown;
