interface Props {
  width: number;
  height: number;
  windows: { top: number; left: number }[];
  background?: string;
  secondPlan?: boolean;
}

const BlackBuilding = ({
  width,
  height,
  windows,
  background,
  secondPlan,
}: Props) => {
  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        background: background || "#000",
      }}
    >
      {windows.map((el, i) => (
        <div
          key={"window_" + i}
          style={{
            position: "absolute",
            width: secondPlan ? "1px" : "3px",
            height: secondPlan ? "2.5px" : "5px",
            background: "#feffd2",
            top: el.top,
            left: el.left,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BlackBuilding;
