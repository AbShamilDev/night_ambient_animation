import "./WiresPole.scss";

const WiresPole = () => {
  return (
    <div className="wiresPoleWrapper">
      <div className="wiresPoleContainer">
        <div className="pole" />

        <div className="wires">
          <div className="wire" />
          <div className="wire" />
          <div className="wire" />
        </div>

        <div className="pole" />

        <div className="wires">
          <div className="wire" />
          <div className="wire" />
          <div className="wire" />
        </div>

        <div className="pole" />
      </div>
    </div>
  );
};

export default WiresPole;
