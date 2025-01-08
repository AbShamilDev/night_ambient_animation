import TownContainer from "../TownContainer/TownContainer";
import "./FirstPlanTown.scss";

const FirstPlanTown = () => {
  return (
    <div className="firstPlanWrapper">
      <TownContainer
        animationDuration={30}
        baseWidth={80}
        baseHeightInPercent={25}
      />
    </div>
  );
};

export default FirstPlanTown;
