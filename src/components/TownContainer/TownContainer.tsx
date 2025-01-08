import BlackBuilding from "../BlackBuilding/BlackBuilding";
import "./TownContainer.scss";
import { getRandomIntWithRound } from "../../../shared/getRandomInt/getRandomInt";
import { ReactElement, useEffect, useState } from "react";

interface Props {
  color?: string;
  baseWidth: number;
  animationDuration: number;
  baseHeightInPercent: number;
  secondPlan?: boolean;
}

const TownContainer = ({
  color,
  baseWidth,
  animationDuration,
  baseHeightInPercent,
  secondPlan,
}: Props) => {
  const [buildingsInfo, setBuildingsInfo] = useState<ReactElement[]>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const minHeigth = (window.innerHeight * (baseHeightInPercent - 10)) / 100;
  const maxHeight = (window.innerHeight * baseHeightInPercent) / 100;
  const width = baseWidth;
  const numberOfWindows = Math.ceil(width * 0.06);

  const setBuildingsArrayCallback = (
    buildingsNow: number,
    widthNow: number
  ) => {
    const buildingsNumber = Math.ceil(widthNow / width);

    buildingsNumber !== buildingsNow &&
      setBuildingsInfo(
        Array(buildingsNumber)
          .fill("")
          .map((_, i) => {
            const height = getRandomIntWithRound(minHeigth, maxHeight, 10);

            return (
              <BlackBuilding
                key={`firstPlanBuilding_${i}`}
                secondPlan={secondPlan}
                width={
                  i === buildingsNumber - 1
                    ? widthNow - width * (buildingsNumber - 1)
                    : width
                }
                height={height}
                background={color}
                windows={Array(
                  secondPlan ? numberOfWindows * 3 : numberOfWindows
                )
                  .fill("")
                  .map(() => ({
                    top: getRandomIntWithRound(height * 0.05, height * 0.95, 5),
                    left: getRandomIntWithRound(
                      width * 0.05,
                      width * 0.95,
                      secondPlan ? 2 : 5
                    ),
                  }))}
              />
            );
          })
      );
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWindowWidth(window.innerWidth)
    );
  }, []);

  useEffect(() => {
    setBuildingsArrayCallback(
      buildingsInfo ? buildingsInfo.length : 0,
      windowWidth
    );
  }, [windowWidth]);

  return (
    <div
      className="townContainer"
      style={{
        width: windowWidth * 2 + "px",
        animationDuration: animationDuration + "s",
      }}
    >
      {buildingsInfo}
      {buildingsInfo}
    </div>
  );
};

export default TownContainer;
