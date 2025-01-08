import "./App.scss";
import FirstPlanTown from "./components/FirstPlanTown/FirstPlanTown";
import Moon from "./components/Moon/Moon";
import SecondPlanTown from "./components/SecondPlanTown/SecondPlanTown";
import Stars from "./components/Stars/Stars";
import WiresPole from "./components/WiresPole/WiresPole";

function App() {
  return (
    <div className="app">
      <Moon />
      <Stars />
      <SecondPlanTown />
      <FirstPlanTown />
      <WiresPole />
    </div>
  );
}

export default App;
