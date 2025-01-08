import "./Stars.scss";

const Stars = () => {
  return (
    <div className="starsWrapper">
      {Array(Math.ceil(window.innerWidth * 0.07))
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${Math.random() * 40}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 100}s`,
            }}
          />
        ))}
    </div>
  );
};

export default Stars;
